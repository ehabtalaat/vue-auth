import { createRouter, createWebHistory } from 'vue-router';
import store from './store/index.js';


import login from './pages/auth/login.vue';
import register from './pages/auth/register.vue';
import home from './pages/dashboard/home.vue';
import about from './pages/dashboard/about.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: login ,
    meta: { guest: true }},
    { path: '/register', component: register ,
    meta: { guest: true }},
    { path: '/home', component: home ,
    meta: { requiresAuth: true }},
    { path: '/about', component: about ,
    meta: { requiresAuth: true }},
    { path: '/:notFound(.*)', component: NotFound }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/home");
      return;
    }
    next();
  } else {
    next();
  }
});
export default router;
