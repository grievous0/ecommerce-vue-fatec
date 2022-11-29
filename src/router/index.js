import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '../views/LogIn.vue'
import CheckOut from '../views/CheckOut.vue'
import JoinUs from '../views/SignUp.vue'
import Publish from '../views/PublishProduct.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/joinus',
    name: 'joinus',
    component: JoinUs
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckOut
  },
  {
    path: '/publish',
    name: 'publish',
    component: Publish
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
