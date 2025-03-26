import { Component } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import IndexPage from './components/pages/index-page.vue';

const routes = [
  {
    path: '/',
    component: IndexPage as Component,
  },
] as RouteRecordRaw[];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
