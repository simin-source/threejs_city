import * as THREE from 'three'
import { color } from '../config'

export class Cone {
  scene: any;
  top: { value: number; };
  height: { value: number; };
  constructor(scene: any, top: { value: number; }, height: { value: number; }) {
    this.scene = scene;

    // 变化值
    this.top = top;
    this.height = height;

    this.createCone({
      color: color.cone,
      height: 60,
      opacity: 0.6,
      speed: 4.0,
      position: {
        x: 0,
        y: 50,
        z: 0,
      }
    })
  }

  createCone(options:any) {
    const geometry = new THREE.ConeGeometry(
      15,
      30,
      4,
    );//radius,height,radialsegments

    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_color: {
          value: new THREE.Color(options.color)
        },
        u_height: this.height,
        // 控制上下移动
        u_top: this.top,
      },
      vertexShader: `
            uniform float u_top;
            uniform float u_height;
            
            void main() {
                // 旋转公式
                float f_angle = u_height / 10.0;
                float new_x = position.x * cos(f_angle) - position.z * sin(f_angle);
                float new_y = position.y;
                float new_z = position.z * cos(f_angle) + position.x * sin(f_angle);
            
                vec4 v_position = vec4(new_x, new_y + u_top, new_z, 1.0);
            
                // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                gl_Position = projectionMatrix * modelViewMatrix * v_position;
            }
      `,
      fragmentShader: `
            uniform vec3 u_color;
            
            void main() {
            gl_FragColor = vec4(u_color, 0.6);
            }
      `,
      transparent: true,
      side: THREE.DoubleSide, // 解决只显示一半的问题
      depthTest: false, // 被建筑物遮挡的问题
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(options.position);
    mesh.rotateZ(Math.PI); //翻转

    this.scene.add(mesh);
  }
}
