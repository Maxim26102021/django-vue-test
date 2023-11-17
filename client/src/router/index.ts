import { createRouter, createWebHistory, RouterOptions } from 'vue-router'
import Home from '@/views/Home.vue';


const options = {
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
  ]
}

export const router = createRouter(options);