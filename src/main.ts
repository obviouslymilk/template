import '@/assets/css/index.css';
import '@/assets/css/reset.css';
import { type Component, createApp } from 'vue';
import App from './App.vue';

const app = createApp(App as Component);
app.mount('#app');
