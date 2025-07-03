import { createApp } from 'vue';
import './tw.css';
import './app.css';
import '@mdi/font/css/materialdesignicons.min.css'
import App from './app.vue';
import router from '../router/index.ts'

const app = createApp(App).use(router);
app.mount('#app');

export default app;
