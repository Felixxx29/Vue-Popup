import Main from "../views/Main";
import Second from "../views/Second";
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/Second',
    name: 'Second',
    component: Second
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

