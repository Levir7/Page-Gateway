import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import MetalStamping from '../views/Metal-stamping.vue';
import TubeForming from '../views/Tube-forming.vue';
import Machining from '../views/Machining.vue';
import Plating from '../views/Plating.vue';
import Contact from '../views/Contact.vue';
// import NotFound from '../'

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView},
    { path: '/about', component: AboutView},
    { path: '/Metal-stamping', component: MetalStamping},
    { path: '/tube-forming', component: TubeForming},
    { path: '/machining', component: Machining},
    { path: '/plating', component: Plating},
    { path: '/contact', component: Contact},
    // { path: "*", component: HomeView }
  ]
})

export default router;

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     { path: '/', component: HomeView},
//     { path: '/about', component: import('../views/AboutView.vue')},
//     { path: '/Metal-stamping', component: import('../views/Metal-stamping.vue')},
//     { path: '/tube-forming', component: import('../views/Tube-forming.vue')},
//     { path: '/machining', component: import('../views/Machining.vue')},
//     { path: '/plating', component: Plating}
//   ]
// })