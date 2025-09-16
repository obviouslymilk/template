import IndexPage from '@/pages/IndexPage.vue';
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
