import * as THREE from 'three'
// import { Points } from './points'

export class Snow {
  scene: any;
  range: number;
  count: number;
  pointList: any[];
  material: any;
  geometry: any;
  point: any;
  constructor(scene: any) {

    // this.points = new Points(scene, {
    //   size: 30,
    //   opacity: 0.8,
    //   range: 1000,
    //   count: 600,
    //   setAnimation(position) {
    //     position.x -= position.speedX;
    //     position.y -= position.speedY;
    //     position.z -= position.speedZ;

    //     if (position.y <= 0) {
    //       position.y = this.range / 2;
    //     }
    //   },
    //   setPosition(position) {
    //     position.speedX = Math.random() - 0.5;
    //     position.speedY = Math.random() + 4;
    //     position.speedZ = Math.random() - 0.5;
    //   },
    //   url: '/snow.png',
    // })
    this.scene = scene;
    // 范围
    this.range = 1000;
    // 雪花的个数
    this.count = 600;

    this.pointList = [];

    this.init();
  }

  init() {
    // 粒子和粒子系统
    // PointCloud   Points

    // 材质
    this.material = new THREE.PointsMaterial({
      size: 30,
      map: new THREE.TextureLoader().load('/snow.png'),
      transparent: true,
      opacity: 0.8,
      depthTest: false,
    })

    // 几何对象
    this.geometry = new THREE.BufferGeometry();

    // 添加顶点信息
    for (let i = 0; i < this.count; i++) {
      const position:any = new THREE.Vector3(
        Math.random() * this.range - this.range / 2, // 正或负随机数
        Math.random() * this.range,
        Math.random() * this.range - this.range / 2,
      )

      position.speedX = Math.random() - 0.5; // 正或负随机数
      position.speedY = Math.random() + 0.5; // 正，向下运动
      // position.speedY = Math.random() + 4; // 正，向下运动
      position.speedZ = Math.random() - 0.5;

      this.pointList.push(position)
    }
    this.geometry.setFromPoints(this.pointList);

    this.point = new THREE.Points(this.geometry, this.material)
    this.scene.add(this.point);
  }

  animation() {
    // this.scene.remove(this.point);
    this.pointList.forEach((position:any) => {
      position.x -= position.speedX;
      position.y -= position.speedY;
      position.z -= position.speedZ;

      if (position.y <= 0) {
        position.y = this.range / 2;
      }
    })
    this.geometry.setFromPoints(this.pointList);
      // 每次跟新场景都添加新的雪花，导致雪花越来越多，页面卡死
      // this.point = new THREE.Points(this.geometry, this.material);
      // this.scene.add(this.point);
  }
}
