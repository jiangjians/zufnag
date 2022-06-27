import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import Login from '@/views/Login'
Vue.use(VueRouter)
const Home = () => import('@/views/Home')
const Consultation = () => import('@/views/Consultation')
const FindRoom = () => import('@/views/FindRoom')
const My = () => import('@/views/My')
const routes = [
  {
    path: '/',
    component: Layout,
    redirect: 'home',
    children: [
      { path: 'home', component: Home },
      { path: 'findroom', component: FindRoom },
      { path: 'consultation', component: Consultation },
      { path: 'my', component: My }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
