import { createApp, type Directive } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import pinia from './store'
import '@/assets/main.css'
import '@/assets/iconfont/iconfont.js'
import '@/assets/iconfont/iconfont.css'
import '@/styles/index.less'
import 'animate.css'
import image from './directives/imageLoading'
import registerIcons from '@/global/register-icons'
const app = createApp(App)
app.directive('image', image)
app.use(pinia).use(router).use(registerIcons).mount('#app')
