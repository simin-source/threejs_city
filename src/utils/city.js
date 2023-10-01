import { loadFBX } from "./loader";
import * as THREE from "three";
import * as TWEEN from '@tweenjs/tween.js';
import { SurroundLine } from '../effect/surroundLine.js';
import { Background } from '../effect/background.js';
import { Radar } from '../effect/radar.js';
import { Wall } from '../effect/wall.js';
import { Circle } from '../effect/circle.js';
import { Ball } from '../effect/ball.js';
import { Cone } from '../effect/cone.js';
import { Fly } from '../effect/fly.js';
import { Road } from '../effect/road.js';
import { Font } from '../effect/font.js';

export class City {
    constructor(scene, camera) {
        this.scene = scene;
        this.camera = camera;

        this.tweenPosition = null;
        this.tweenRotation = null;

        this.height = {
            value: 5,
        };//uniforms里是对象格式

        this.time = {
            value: 0,
        };

        this.top = {
            value: 0,
        };
        this.flag = false; //控制来回修改top

        this.loadCity();
    }
    loadCity() {
        // 加载模型，并渲染到画布上
        loadFBX('/src/assets/model/beijing.fbx').then(object => {
            // console.log(object);// 返回组对象Group
            // this.scene.add(object);
            // 遍历场景中的所有几何体数据
            object.traverse((child) => {
                if (child.isMesh) {
                    // 后处理
                    new SurroundLine(this.scene, child, this.height, this.time);
                }
            });
            // 添加效果
            this.initEffect();
        });
    }
    start(delta) {
        // 更新方法
        if (this.tweenPosition && this.tweenRotation) {
            this.tweenPosition.update()
            this.tweenRotation.update()
        }

        this.height.value += 0.4;
        if (this.height.value > 160) {
            this.height.value = 5;
        }

        this.time.value += delta;

        if (this.top.value > 15 || this.top.value < 0) {
            this.flag = !this.flag;
        }
        this.top.value += this.flag ? -0.8 : 0.8;
    }
    initEffect() {
        // new Background(this.scene);
        // 旋转雷达
        // new Radar(this.scene, this.time);
        // 收缩透明墙
        // new Wall(this.scene, this.time);
        // new Circle(this.scene, this.time);
        // new Ball(this.scene, this.time);
        // new Cone(this.scene, this.top, this.height);
        // new Fly(this.scene, this.time);
        // new Road(this.scene, this.time);
        new Font(this.scene);

        // 添加点击选择
        this.addClick();
    }
    addClick() {
        // document.onclick = (event) => {
        //     this.clickEvent(event)
        // }

        //使拖拽不会触发聚焦
        let flag = true;
        document.onmousedown = () => {
            flag = true;

            document.onmousemove = () => {
                flag = false;
            }
        }

        document.onmouseup = (event) => {
            if (flag) {
                this.clickEvent(event)
            }
            document.onmousemove = null;
        }
    }
    clickEvent(event) {
        // 获取到浏览器坐标
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;

        // 创建设备坐标（三维）
        const standardVector = new THREE.Vector3(x, y, 0.5);

        // 转化为世界坐标
        const worldVector = standardVector.unproject(this.camera);

        // 做序列化
        const ray = worldVector.sub(this.camera.position).normalize();

        // 如何实现点击选中
        // 创建一个射线发射器，用来发射一条射线
        const raycaster = new THREE.Raycaster(this.camera.position, ray);

        // 返回射线碰撞到的物体
        const intersects = raycaster.intersectObjects(this.scene.children, true);
        // console.log(intersects);

        let point3d = null;
        if (intersects.length) {
            point3d = intersects[0];
        }
        // console.log(point3d);
        if (point3d) {
            const proportion = 3; //倍数
            // 开始动画来修改观察点
            const time = 1000;
            // 位置
            this.tweenPosition = new TWEEN.Tween(this.camera.position).to({
                x: point3d.point.x * proportion,
                y: point3d.point.y * proportion,
                z: point3d.point.z * proportion,
            }, time).start();
            // 方向
            this.tweenRotation = new TWEEN.Tween(this.camera.rotation).to({
                x: this.camera.rotation.x,
                y: this.camera.rotation.y,
                z: this.camera.rotation.z,
            }, time).start();
        }
    }
}