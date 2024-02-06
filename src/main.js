import { createApp } from 'vue'
import App from './App.vue'
import index from '@/router'
import store from '@/store'

const app = createApp(App)

app.use(index).use(store).mount('#app')
