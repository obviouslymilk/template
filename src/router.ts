import IndexPage from '@/pages/index-page.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes = [
  {
    path: '/',
    component: IndexPage,
  },
] as RouteRecordRaw[];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
