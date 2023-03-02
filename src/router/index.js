import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView},
    { path: '/about', component: import('../views/AboutView.vue')},
    { path: '/Metal-stamping', component: import('../views/Metal-stamping.vue')},
    { path: '/tube-forming', component: import('../views/Tube-forming.vue')},
    { path: '/machining', component: import('../views/Machining.vue')},
    { path: '/plating', component: import('../views/Plating.vue')}
  ]
})

export default router;
