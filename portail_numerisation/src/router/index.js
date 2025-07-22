import { createRouter, createWebHistory } from 'vue-router'

import Accueil from '@/pages/Accueil.vue'
import Tutoriels from '@/pages/Tutoriels.vue'
import Soutien from '@/pages/Soutien.vue'
import ActivitesFormation from '@/pages/ActivitesFormation.vue'
import RessourcesExternes from '@/pages/RessourcesExternes.vue'

import AideMemoireNumerisation from '@/pages/AideMemoireNumerisation.vue'
const routes = [
  {
    path: '/PortailNumerisation',
    component: Accueil, // this is the page shown for the base path
  },
  {
    path: '/PortailNumerisation/Tutoriels',
    component: Tutoriels
  },
  {
    path: '/PortailNumerisation/Soutien',
    component: Soutien
  },
  {
    path: '/PortailNumerisation/ActivitesFormation',
    component: ActivitesFormation
  },
  {
    path: '/PortailNumerisation/RessourcesExternes',
    component: RessourcesExternes
  },
  {
    path: '/PortailNumerisation/AideMemoireNumerisation',
    component: AideMemoireNumerisation
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router