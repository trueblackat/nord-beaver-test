import { createApp } from 'vue';
import router from './router/index.ts';
import App from './App.vue';
import SvgIcon from './components/common/SvgIcon.vue';
import tooltip from './plugins/tooltip.ts';
import '@/assets/scss/main.scss';

const app = createApp(App);

app.use(router);
app.use(tooltip);
app.component('SvgIcon', SvgIcon);

app.mount('#app');
