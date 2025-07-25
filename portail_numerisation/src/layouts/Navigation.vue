<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const drawer = ref(true)
const route = useRoute()
</script>

<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer" floating>
      <v-card class="ma-2" elevation="4" rounded="lg">
        <v-list density="compact" nav slim>
          <v-list-item :to="{ path: '/PortailNumerisation/' }"
            prepend-avatar="https://www.moissonestrie.com/cdn/shop/files/3769_geodir_logo_12510294-597224803768615-8795392792948671030-n_32x32.png?v=1715785600"
            subtitle="par Moisson Estrie" title="Portail Numérisation" />

          <v-divider class="my-2" />

          <v-list-item prepend-icon="mdi-face-agent" title="Soutien" :to="{ path: '/PortailNumerisation/Soutien' }" />

          <v-list-item prepend-icon="mdi-school" title="Tutoriels" :to="{ path: '/PortailNumerisation/Tutoriels' }" />

          <v-list-item prepend-icon="mdi-ticket" title="Activités de formation"
            :to="{ path: '/PortailNumerisation/ActivitesFormation' }" />

          <v-list-item prepend-icon="mdi-link" title="Ressources externes"
            :to="{ path: '/PortailNumerisation/RessourcesExternes' }" />
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-app-bar flat title="Portail Numérisation">
      <template #prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer" variant="outlined">
          <v-icon>mdi-menu</v-icon>
          <v-icon :class="{ 'rotate-icon': !drawer }">mdi-arrow-left</v-icon>
        </v-app-bar-nav-icon>
      </template>
    </v-app-bar>

    <v-main>
      <router-view class="ma-2" elevation="4" rounded="lg" />
    </v-main>
  </v-layout>
</template>

<style scoped>
.rotate-icon {
  transform: rotate(180deg);
  transition: transform 0.5s ease-in-out;
}
</style>