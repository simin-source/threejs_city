import { defineComponent } from "vue";
import { draw } from './CityMap.module.scss';
import { initCity } from "../../utils/init";

export default defineComponent({
    name: 'CityMap',
    data(){
        return{
            
        }
    },
    mounted() {
        initCity();
    },
    render() {
          return <canvas id="webgl" class={draw}>浏览器不支持canvas</canvas>;
    },
});