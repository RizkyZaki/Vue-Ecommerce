import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import list_produk from '../views/List-Produk.vue'
import About from '../views/About.vue'
import Cart from '../views/Cart.vue'
import produk from '../views/Produk.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/list',
    name: 'list_produk',
    component: list_produk
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/produk/:id',
    name: 'produk',
    component: produk
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router