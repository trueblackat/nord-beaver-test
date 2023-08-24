import { App } from 'vue';
import Tooltip from 'vue-follow-tooltip';

export default {
  install(app: App) {
    app.use(Tooltip, {
      delay: 0,
      center: false,
      offsetX: 10,
      offsetY: 20,
    });
  },
};
