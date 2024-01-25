import { createApp } from 'vue'
import './style.css'
import './assets/styles/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router/index.ts'
import { createPinia } from 'pinia'
import 'virtual:svg-icons-register'
import { SvgIconPlugin } from './components/SvgIcon'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
const pinia = createPinia()

app.use(pinia)
app.use(SvgIconPlugin);
app.use(router)
app.use(ElementPlus)
app.mount('#app')
