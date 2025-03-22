import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Support from './views/Support.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/support', component: Support },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
