import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import test from './core/test.js'

createApp(App).use(router).mount('#app')
