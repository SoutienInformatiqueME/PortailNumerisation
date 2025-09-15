<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          :class="drawer ? '' : 'breathing'"
        />

        <q-toolbar-title class="row items-center q-gutter-sm">
          <q-img
            alt="Logo Moisson Estrie"
            src="https://cdn-ch-prod-bqhwa0ewbpg6eyc2.z01.azurefd.net/prod-img-cache/CDN-ik-images/charityprofile/4/3193/Moisson-Estrie-logo-01_vpD2TEh.png"
            fit="contain"
            style="max-height: 10vh"
          />
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>
    
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)

function toggleLeftDrawer() {
  drawer.value = !drawer.value
}
</script>

<style scoped>
@keyframes breathe {
  0%,
  100% {
    background-color: var(--q-primary);
    transform: scale(1);
  }
  50% {
    background-color: var(--q-secondary);
    transform: scale(1.05);
  }
}

.breathing {
  animation: breathe 10s ease-in-out infinite;
}

.active {
  color: var(--q-secondary);
}
</style>
