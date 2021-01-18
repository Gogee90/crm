import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ClientsComponent from "@/components/ClientsComponent";
import ServicesComponent from "@/components/ServicesComponent";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/clients',
    name: 'ClientsComponent',
    component: ClientsComponent
  },
  {
    path: '/services',
    name: 'ServicesComponent',
    component: ServicesComponent
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
