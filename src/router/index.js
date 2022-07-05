import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import Login from '@/views/Login'
// import City from '@/views/City'
Vue.use(VueRouter)
const Home = () => import('@/views/Home')
const Consultation = () => import('@/views/Consultation')
const FindRoom = () => import('@/views/FindRoom')
const My = () => import('@/views/My')
const City = () => import('@/views/City')
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
  },
  { path: '/city', component: City }
]

const router = new VueRouter({
  routes
})

export default router
