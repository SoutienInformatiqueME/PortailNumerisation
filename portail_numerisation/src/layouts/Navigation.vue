<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";

const drawer = ref(true);
const route = useRoute();
</script>

<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer" floating>
      <v-card class="ma-2" elevation="4" rounded="lg">
        <v-list density="compact" nav slim>
          <v-list-item
            :to="{ path: '/PortailNumerisation/' }"
            prepend-avatar="https://www.moissonestrie.com/cdn/shop/files/3769_geodir_logo_12510294-597224803768615-8795392792948671030-n_32x32.png?v=1715785600"
            subtitle="par Moisson Estrie"
            title="Portail Numérisation"
          />

          <v-divider class="my-2" />

          <v-list-item
            prepend-icon="mdi-face-agent"
            title="Soutien"
            :to="{ path: '/PortailNumerisation/Soutien' }"
          />

          <v-list-item
            prepend-icon="mdi-school"
            title="Tutoriels"
            :to="{ path: '/PortailNumerisation/Tutoriels' }"
          />

          <v-list-item
            prepend-icon="mdi-ticket"
            title="Activités de formation"
            :to="{ path: '/PortailNumerisation/ActivitesFormation' }"
          />

          <v-list-item
            prepend-icon="mdi-link"
            title="Ressources externes"
            :to="{ path: '/PortailNumerisation/RessourcesExternes' }"
          />
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
      <p>
        <small
          >Le <b>Portail Numérisation</b> par
          <a target="_blank" href="https://www.moissonestrie.com/"
            >Moisson Estrie<i class="mdi mdi-open-in-new"></i
          ></a>
          n'est pas affilié avec
          <a target="_blank" href="https://foodbankscanada.ca/fr/"
            >Banques&nbsp;alimentaires&nbsp;Canada<i
              class="mdi mdi-open-in-new"
            ></i></a
          >,
          <a target="_blank" href="https://banquesalimentaires.org/"
            >Banques&nbsp;alimentaires&nbsp;du&nbsp;Québec<i
              class="mdi mdi-open-in-new"
            ></i></a
          >,
          <a target="_blank" href="https://www.toucansolutions.ca/"
            >Toucan Solution<i class="mdi mdi-open-in-new"></i
          ></a>
          ou
          <a target="_blank" href="https://pr2.ca/"
            >PR2<i class="mdi mdi-open-in-new"></i
          ></a>
          et sa plateforme de formation
          <a target="_blank" href="https://pr2ca.odoo.com/"
            >Oodo<i class="mdi mdi-open-in-new"></i></a
          >.
        </small>
      </p>
      <p>
        <small> Dernière mise à jour le 31 juillet 2025 </small>
      </p>
    </v-main>
  </v-layout>
</template>

<style scoped>
.rotate-icon {
  transform: rotate(180deg);
  transition: transform 0.5s ease-in-out;
}
</style>
