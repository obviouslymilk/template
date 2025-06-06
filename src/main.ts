import '@/assets/styles/index.css';
import '@/assets/styles/reset.css';
import { type Component, createApp } from 'vue';
import App from './app.vue';
import { router } from './router';

const app = createApp(App as Component);
app.use(router);

app.mount('#app');
