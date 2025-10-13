import '@/assets/styles/base.css';
import { type Component, createApp } from 'vue';
import App from './App.vue';
import { router } from './router';

const app = createApp(App as Component);
app.use(router);

app.mount('#app');
