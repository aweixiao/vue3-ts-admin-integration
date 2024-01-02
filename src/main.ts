import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index.ts'
import 'virtual:svg-icons-register'
import {SvgIconPlugin} from './components/SvgIcon'

const app = createApp(App)
app.use(SvgIconPlugin);
app.use(router)
app.use(ElementPlus)
app.mount('#app')
