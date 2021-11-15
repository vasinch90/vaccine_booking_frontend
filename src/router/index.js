import { createRouter, createWebHistory } from 'vue-router'

import Notfound from '@/views/Notfound.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Profile from '@/views/Profile.vue'
import Booking from '@/views/Booking.vue'

function authGuard(to, from, next){

  let isAuthenticated = false
  if(localStorage.getItem('user')){
    isAuthenticated = true
  }
  if(isAuthenticated){
    next()
  }else{
    next({name: 'Login'})
  }
}

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: authGuard,
  },
  {
    path: '/booking',
    name: 'Booking',
    component: Booking,
    beforeEnter: authGuard,
  },

  { // error 404 ไม่พบ page
    path: '/:catchAll(.*)',
    component: Notfound,
    meta: {
      title: '404 ไม่พบหน้านี้',
      description: 'รายละเอียด 404 ไม่พบหน้านี้ ระบบคงคลังสินค้า'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
