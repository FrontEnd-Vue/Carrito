import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginVue.vue')
  },
  {
    path: '/home', 
    name: 'home',
    component: HomeView, alias: '/inicio'
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/tienda',
    name: 'tienda',
    component: () => import('../views/TiendaView.vue')
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: () => import('../views/UsuariosView.vue')
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: "/producto/:prdId",
    name: "ProductDetail",
    component: () => import('../components/ProductDetails.vue')
  },
  {
    path: '/logout',
    name: 'logOut',
    component: () => import('../components/LogOut.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
