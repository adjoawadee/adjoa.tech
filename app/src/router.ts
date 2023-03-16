import { createRouter, createWebHashHistory } from 'vue-router';
import Homepage from './views/Homepage.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: Homepage
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
          return {
            el: to.hash,
            top: 70,
            behavior: 'smooth'
          }
        }
    }
});

export default router;