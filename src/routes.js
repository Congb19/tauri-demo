import { createRouter, createWebHistory } from 'vue-router';

import test from './pages/test/test.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: test,
    },
  ],
});
