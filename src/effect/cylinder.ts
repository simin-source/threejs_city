import * as THREE from 'three';
import { color } from '../config';

export class Cylinder {
    scene: any;
    time: { value: number; };
    //扩散集合体
    constructor(scene: any, time: { value: number; }) {
        this.scene = scene;
        this.time = time;

    }
    createCylinder(options:any) {
        //圆柱
        const geometry = new THREE.CylinderGeometry(options.radius, options.radius, options.height, 32, 1, options.open);//顶,底,高,顶间隙,底间隙,是否打开顶部

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