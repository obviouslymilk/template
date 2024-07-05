import { type Component, createApp } from 'vue'
import '@/assets/reset.css'
import App from './App.vue'

const app = createApp(App as Component)
app.mount('#app')
