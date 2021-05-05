import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddPlayer from '../views/AddPlayer.vue'
import EditPlayer from '../views/EditPlayer.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/add',
    name:'AddPlayer',
    component: AddPlayer
  },
  {
    path: '/players/:id',
    name: 'EditPlayer',
    component: EditPlayer,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
