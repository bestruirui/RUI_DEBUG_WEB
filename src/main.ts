import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import store from './stores/store' // 注意修改为 store.ts

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(store) // 注册 store

app.mount('#app')
