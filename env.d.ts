/// <reference types="vite/client" />
declare module '*.vue' {
  // defineComponent的返回值类型
  import { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}