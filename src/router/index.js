import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'characters',
    component: () => import('../views/Characters.vue')
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('../views/Favorites.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  strict: true,
  base: process.env.BASE_URL,
  routes,
});

export default router;
