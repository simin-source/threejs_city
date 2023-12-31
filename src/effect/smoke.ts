// 烟雾预警 粒子
import * as THREE from 'three'

export class Smoke {
  scene: any;
  smokes: any[];
  geometry: any;
  material: any;
  points: any;
  constructor(scene: any) {
    this.scene = scene;

    this.smokes = [];

    this.init()
  }

  init() {
    // 粒子初始化 空的缓冲几何体
    this.geometry = new THREE.BufferGeometry();

    // 添加坐标,纹理等信息
    // this.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, 0, 0]),3));

    this.material = new THREE.PointsMaterial({
      size: 50, //500
      map: new THREE.TextureLoader().load('./img/smoke.png'),
      transparent: true,
      depthWrite: false, // 禁止深度写入
    })

    this.material.onBeforeCompile = function (shader: { vertexShader: string; fragmentShader: string; }) {

      const vertex1 = `
        attribute float a_opacity;
        attribute float a_size;
        attribute float a_scale;
        varying float v_opacity;

        void main() {
          v_opacity = a_opacity;
      `;

      const glPosition = `
        gl_PointSize = a_size * a_scale;
      `

      // console.log(shader.vertexShader);
      shader.vertexShader = shader.vertexShader.replace('void main() {', vertex1);
      shader.vertexShader = shader.vertexShader.replace('gl_PointSize = size', glPosition);

      const fragment1 = `
        varying float v_opacity;

        void main() {
      `
      const fragment2 = `
        gl_FragColor = vec4(outgoingLight, diffuseColor.a * v_opacity);
      `
      // console.log(shader.fragmentShader);
      shader.fragmentShader = shader.fragmentShader.replace('void main() {', fragment1);
      shader.fragmentShader = shader.fragmentShader.replace('gl_FragColor = vec4(outgoingLight, diffuseColor.a);', fragment2);
    }

    this.points = new THREE.Points(this.geometry, this.material);

    this.scene.add(this.points);
  }

  createParticle() {
    // 动态创建粒子
    this.smokes.push({
      size: 50,
      opacity: 1,
      x: 490,
      y: 10,
      z: 353,

      speed: {
        x: Math.random(),
        y: Math.random() + 0.3,
        z: Math.random()
      },

      scale: 1,
    });
  }

  setAttribute(
    positionList: any[],
    opacityList: any[],
    sizeList: any[],
    scaleList: any[],
  ) {
    // 坐标信息， 纹理信息， 自己设置的变量信息……
    this.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positionList), 3))
    this.geometry.setAttribute('a_opacity', new THREE.BufferAttribute(new Float32Array(opacityList), 1))
    this.geometry.setAttribute('a_size', new THREE.BufferAttribute(new Float32Array(sizeList), 1))
    this.geometry.setAttribute('a_scale', new THREE.BufferAttribute(new Float32Array(scaleList), 1))
  }

  update() {

    const positionList: any[] = [];
    const sizeList: any[] = [];
    const scaleList: any[] = [];
    const opacityList: any[] = [];
    this.smokes = this.smokes.filter(item => {
      // 如果说达到某一个条件，就抛弃当前的粒子。 opacity <= 0
      if (item.opacity < 0) {
        return false;
      }
      item.opacity -= 0.01;

      item.x = item.x + item.speed.x
      item.y = item.y + item.speed.y
      item.z = item.z + item.speed.z

      item.scale += 0.01; //扩散速度

      positionList.push(item.x, item.y, item.z);
      sizeList.push(item.size);
      scaleList.push(item.scale);
      opacityList.push(item.opacity);

      return true
    });

    this.setAttribute(
      positionList,
      opacityList,
      sizeList,
      scaleList,
    )
  }

  animation() {
    this.createParticle();
    this.update();
  }
}
