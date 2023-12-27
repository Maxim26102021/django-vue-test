import { createRouter, createWebHistory, RouterOptions } from 'vue-router'
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';


const options = {
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
      },
      {
          path: '/about',
          name: 'about',
          component: About
      },
  ]
}

export const router = createRouter(options);