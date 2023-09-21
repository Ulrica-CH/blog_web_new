import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import postcssPxToViewport from 'postcss-px-to-viewport'
/** 针对ElMessage和ElLoading等组件引入样式 */
import {
  createStyleImportPlugin,
  ElementPlusResolve
} from 'vite-plugin-style-import'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    /** 针对ElMessage和ElLoading等组件引入样式 */
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name: string) => {
            return `element-plus/theme-chalk/${name}.css`
          }
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        charset: false,
        /** 全局scss */
        additionalData: `
        @import "./src/styles/mixin.scss";
        @import "./src/styles/var.scss";
        `
      }
    },
    postcss: {
      plugins: [
        postcssPxToViewport({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: 1920, // UI设计稿的宽度
          unitPrecision: 3, // 转换后的精度，即小数点位数
          propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
          // landscapeUnit: 'vh', // 横屏时使用的单位
          // landscapeWidth: 667, // 横屏时使用的视口宽度
          selectorBlackList: ['.pc'], // 指定不转换为视窗单位的类名
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          // landscape: false, // 是否处理横屏情况
          exclude: /(\/|\\)(node_modules)(\/|\\)/ // 设置忽略文件，用正则做目录名匹配
        })
      ]
    }
  },
  // 服务端渲染
  server: {
    // 自动开浏览器
    open: true,
    // 热更新
    hmr: {
      overlay: false
    },
    // 是否开启 https
    https: false,
    // 端口号
    port: 8080,
    // host: '127.0.0.1',
    // 本地跨域代理 https://cn.vitejs.dev/config/server-options.html#server-proxy
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/gitee': {
        target: 'https://gitee.com/mrzym',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gitee/, '')
      },
      '/wapi': {
        //要访问的跨域的域名
        target: 'http://mrzym.top:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/wapi/, '')
      }
    }
  }
})
