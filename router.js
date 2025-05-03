// src/router.js

import { createRouter, createWebHistory } from 'vue-router'

// Import your components (pages)
import HomePage from './views/HomePage.vue'
import GalleryPage from './src/components/GalleryPage.vue'
import LinksPage from './src/components/LinksPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: GalleryPage
  },
  {
    path: '/links',
    name: 'Links',
    component: LinksPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
