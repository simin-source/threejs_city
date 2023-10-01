import * as THREE from 'three';
import { color } from '../config';

export class Ball {
    //扩散集合体
    constructor(scene, time) {
        this.scene = scene;
        this.time = time;

        // 球基本配置
        this.config = {
            radius: 30,
            height: 60,// 高度大于半径展示圆
            color: color.ball,
            opacity: 0.6,
            position: { x: 300, y: 0, z: -200 },
            speed: 3.0,
        };

        this.createSphere(this.config);
    }
    createSphere(options) {
        //球
        const geometry = new THREE.SphereGeometry(options.radius, 32, 32, Math.PI / 2, Math.PI * 2, 0, Math.PI / 2);//radius,ws,hs,phlstart,phllenght,thetastart,thetalength

        geometry.translate(0, options.height / 2, 0); // 使几何体沿y轴移动
        const material = new THREE.ShaderMaterial({
            uniforms: {
                u_color: {
                    value: new THREE.Color(options.color)
                },
                u_opacity: {
                    value: options.opacity
                },
                u_height: {
                    value: options.height
                },
                //变化值
                u_time: this.time,
                //扩散速度
                u_speed: {
                    value: options.speed ? options.speed : 1.0,
                },
            },
            vertexShader: `
                uniform float u_time;
                uniform float u_height;
                uniform float u_speed;

                varying float v_opacity;

                void main() {
                    // vec3 v_position=position *mod(u_time,1.0); 
                    vec3 v_position=position *mod(u_time / u_speed,1.0);

                    // 渐变透明度(与高度有关)
                    // v_opacity=position.y / u_height;
                    // 翻转渐变,可旋转几何或者使用mix
                    v_opacity=mix(1.0,0.0,position.y / u_height);

                    gl_Position = projectionMatrix * modelViewMatrix * vec4(v_position, 1.0);
                }
          `,
            fragmentShader: `
                uniform vec3 u_color;
                uniform float u_opacity;

                varying float v_opacity;
            
                void main() {

                    gl_FragColor = vec4(u_color, u_opacity*v_opacity);
                }
          `,
            transparent: true,
            side: THREE.DoubleSide, // 解决建筑物展示部分问题
            depthTest: false, // 解决不会被建筑物遮挡隐藏
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.copy(options.position);

        this.scene.add(mesh);
    }
}