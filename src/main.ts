import { createApp } from 'vue';
import router from './router/index.ts';
import App from './App.vue';
import '@/assets/scss/main.scss';
import SvgIcon from './components/common/SvgIcon.vue';

const app = createApp(App);

app.use(router);
app.component('SvgIcon', SvgIcon);

app.mount('#app');
