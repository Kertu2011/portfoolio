import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import GalleryView from '../views/GalleryView.vue'
import ConfigView from '../views/ConfigView.vue'
import LinksView from '../views/LinksView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView, // lazy-loadi võib jätta ka, kui soovid
  },
    { 
    path: '/gallery',
    name: 'gallery',
    component: GalleryView,
  },
  { path: '/config',
    name: 'config',
    component: ConfigView,
  },
  { path: '/links',
    name: 'links',
    component: LinksView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
