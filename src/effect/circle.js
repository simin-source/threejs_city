import { color } from '../config';
import { Cylinder } from '../effect/cylinder';

export class Circle {
    constructor(scene, time) {
        // 圆基本配置
        this.config = {
            radius: 50,
            height: 1,
            open: false,//是否打开顶部
            color: color.circle,
            opacity: 0.6,
            position: {
                x: 300,
                y: 0,
                z: 300,
            },
            speed: 2.0,
        };

        new Cylinder(scene, time).createCylinder(this.config);
    }
}