import { createApp } from 'vue'
import './style.css'
import router from '../src/router/index'
import App from './App.vue'
import { createPinia } from 'pinia'
import AOS from 'aos'
import 'aos/dist/aos.css'

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')

AOS.init()
