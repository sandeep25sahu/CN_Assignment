import { createApp } from 'vue'
import './style.css'
import router from '../src/router/index'
import App from './App.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'



createApp(App).use(router).mount('#app')

AOS.init()