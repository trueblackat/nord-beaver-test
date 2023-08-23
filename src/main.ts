import { createApp } from 'vue';
import Tooltip from 'vue-follow-tooltip';
import router from './router/index.ts';
import App from './App.vue';
import '@/assets/scss/main.scss';
import SvgIcon from './components/common/SvgIcon.vue';

const app = createApp(App);

app.use(Tooltip, {
  delay: 0,
  center: false,
  offsetX: 10,
  offsetY: 20,
});
app.use(router);
app.component('SvgIcon', SvgIcon);

app.mount('#app');
