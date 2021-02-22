import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import './core/daemon.js'

createApp(App).use(router).mount('#app')
