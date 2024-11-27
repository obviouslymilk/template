import '@/assets/styles/index.css';
import '@/assets/styles/reset.css';
import { type Component, createApp } from 'vue';
import App from './App.vue';

const app = createApp(App as Component);
app.mount('#app');
