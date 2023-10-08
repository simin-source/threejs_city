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
import { Smoke } from '../effect/smoke.js';
import { Snow } from '../effect/snow.js';
import { Rain } from '../effect/rain.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export class City {
    scene: any;
    camera: any;
    controls: any;
    tweenPosition: any;
    tweenRotation: any;
    height: { value: number; };
    time: { value: number; };
    top: { value: number; };
    flag: boolean;
    effect: any;

    constructor(scene: any, camera: any, controls: OrbitControls) {
        this.scene = scene;
        this.camera = camera;
        this.controls = controls;

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

        this.effect = {};

        this.loadCity();

        this.addWheel();
    }
    loadCity() {
        // 加载模型，并渲染到画布上
        loadFBX('/model/beijing.fbx').then((object:any) => {
            // console.log(object);// 返回组对象Group
            // this.scene.add(object);
            // 遍历场景中的所有几何体数据
            object.traverse((child: { isMesh: any; }) => {
                if (child.isMesh) {
                    // 后处理
                    new SurroundLine(this.scene, child, this.height, this.time);
                }
            });
            // 添加效果
            this.initEffect();
        });
    }
    start(delta: any) {
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

        for (const key in this.effect) {
            this.effect[key] && this.effect[key].animation();
        }
    }
    initEffect() {
        // new Background(this.scene);
        // 旋转雷达
        new Radar(this.scene, this.time);
        // 收缩透明墙
        new Wall(this.scene, this.time);
        new Circle(this.scene, this.time);
        // new Ball(this.scene, this.time);
        new Cone(this.scene, this.top, this.height);
        new Fly(this.scene, this.time);
        new Road(this.scene, this.time);
        new Font(this.scene);

        this.effect.smoke = new Smoke(this.scene);
        // this.effect.snow = new Snow(this.scene);
        this.effect.rain = new Rain(this.scene);

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
    clickEvent(event: MouseEvent) {
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
            // console.log(point3d);
        }
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
    addWheel() {
        //让场景根据鼠标位置进行缩放
        const body = document.body as any;
        body.onmoussewheel = (event: { clientX: number; clientY: number; wheelDelta: number; }) => {
            const value = 30;

            //获取鼠标坐标位置
            const x = (event.clientX / window.innerWidth) * 2 - 1;
            const y = -(event.clientY / window.innerHeight) * 2 + 1;

            // 获取屏幕坐标
            const vector = new THREE.Vector3(x, y, 0.5);
            // 将屏幕坐标转换为three.js场景坐标（鼠标点击位坐标置转三维坐标）
            vector.unproject(this.camera);
            // 获取缩放的坐标信息
            vector.sub(this.camera.position).normalize();

            if (event.wheelDelta > 0) {
                //针对相机做处理
                this.camera.position.x += vector.x * value;
                this.camera.position.y += vector.y * value;
                this.camera.position.z += vector.z * value;
                this.controls.target.x += vector.x * value;
                this.controls.target.y += vector.y * value;
                this.controls.target.z += vector.z * value;
            } else {
                this.camera.position.x -= vector.x * value;
                this.camera.position.y -= vector.y * value;
                this.camera.position.z -= vector.z * value;
                this.controls.target.x -= vector.x * value;
                this.controls.target.y -= vector.y * value;
                this.controls.target.z -= vector.z * value;
            }
        }
    }
}