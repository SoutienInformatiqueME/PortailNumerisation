import { createRouter, createWebHistory } from 'vue-router'

import AideMemoireNumerisation from '@/pages/AideMemoireNumerisation.vue'
import Accueil from '@/pages/Accueil.vue'
import Tutoriels from '@/pages/Tutoriels.vue'

const routes = [
  {
    path: '/PortailNumerisation',
    component: Accueil, // this is the page shown for the base path
  },
  {
    path: '/PortailNumerisation/Tutoriels',
    component: Tutoriels
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router