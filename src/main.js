import { createApp } from 'vue';

import routes from './routes';
import App from './app.vue';

import 'vue-global-api/ref';
import 'vue-global-api/reactive';
import 'vue-global-api/computed';
import 'vue-global-api/watch';
import 'vue-global-api/watchEffect';

import {
  create,
  NButton,
  NInput,
  NCard
} from 'naive-ui';

const naive = create({
  components: [NButton, NInput, NCard]
})

const app = createApp(App);

app.use(routes);
app.use(naive);

app.mount('#app');
