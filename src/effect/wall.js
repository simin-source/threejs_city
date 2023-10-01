import * as THREE from 'three';
import { color } from '../config';

export class Wall {
    constructor(scene, time) {
        this.scene = scene;
        this.time = time;

        // 圆柱基本配置
        this.config = {
            radius: 50,
            height: 50,
            open: true,//是否打开顶部
            color: color.wall,
            opacity: 0.6,
        };

        this.init();
    }
    init() {
        //圆柱
        const geometry = new THREE.CylinderGeometry(this.config.radius, this.config.radius, this.config.height, 32, 1, this.config.open);//顶,底,高,顶间隙,底间隙,是否打开顶部

        geometry.translate(0, this.config.height / 2, 0); // 使几何体沿y轴移动
        const material = new THREE.ShaderMaterial({
            uniforms: {
                u_color: {
                    value: new THREE.Color(this.config.color)
                },
                u_opacity: {
                    value: this.config.opacity
                },
                u_radius: {
                    value: this.config.radius
                },
                u_height: {
                    value: this.config.height
                },
                //变化值
                u_time: this.time,
            },
            vertexShader: `
                uniform float u_time;
                uniform float u_height;

                varying float v_opacity;

                void main() {
                    vec3 v_position=position *mod(u_time,1.0);

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
        mesh.position.set(0, 0, 0);

        this.scene.add(mesh);
    }
}