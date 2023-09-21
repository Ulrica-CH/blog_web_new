import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import pinia from './store'
import '@/assets/main.css'
import '@/styles/index.less'

import registerIcons from '@/global/register-icons'
const app = createApp(App)
app.use(pinia).use(router).use(registerIcons).mount('#app')
