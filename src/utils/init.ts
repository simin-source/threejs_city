import * as THREE from "three";
import { City } from "./city";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export const initCity = () => {
    // 1、获取canvas
    const canvas = document.getElementById('webgl') as HTMLElement;
    // 2、场景
    const scene = new THREE.Scene();
    // 3、相机（透视）
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100000);
    camera.position.set(1000, 500, 100);
    scene.add(camera);
    // 添加相机控件-轨迹
    const controls = new OrbitControls(camera, canvas);
    // 是否有惯性
    controls.enableDamping = true;
    // 是否可以缩放
    // controls.enableZoom = true;
    controls.enableZoom = false; // 采用鼠标滚轮
    // 最近和最远距离
    controls.minDistance = 100;
    controls.maxDistance = 2000;
    // 开启右键拖动, 处理场景偏移问题
    controls.enablePan = true;
    // 4、灯光
    scene.add(new THREE.AmbientLight(0xadadad));//环境光
    const directionLight = new THREE.DirectionalLight(0xffffff);//太阳光
    directionLight.position.set(0, 0, 0);
    scene.add(directionLight);
    // 5、渲染器
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 像素比（和浏览器一致）
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // 背景色
    renderer.setClearColor(new THREE.Color(0x000000), 1);

    const city = new City(scene, camera, controls);

    const clock = new THREE.Clock();

    const start = () => {

        //指定每一帧更新时间
        city.start(clock.getDelta());
        //   city.start();

        controls.update();
        // 渲染场景
        renderer.render(scene, camera);
        requestAnimationFrame(start);
    };
    start();

    window.addEventListener('resize', () => {
        // 更新宽高比
        camera.aspect = window.innerWidth / window.innerHeight;
        // 更新相机的投影矩阵
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
        // 设置像素比
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

}