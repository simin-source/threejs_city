import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  // root: './',
  // publicDir: '../../public',
  base: './',
  plugins: [vue(),vueJsx()],
  server: {
    host: '0.0.0.0',
    port: 8888,
  },
})