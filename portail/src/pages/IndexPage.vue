<template>
  <q-page class="flex flex-center">
    <div class="q-pa-sm">
      <q-card>
        <q-card-section>
          <div class="text-h5 text-center">Atelier de formation</div>
        </q-card-section>
        <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          animated
          control-color="primary"
          class="rounded-borders bg-transparent"
          swipeable
        >
          <q-carousel-slide name="introduction" class="column no-wrap flex-center">
            <q-card class="bg-secondary" bordered>
              <q-card-section class="row items-center">
                <q-icon name="looks_one" color="primary" size="30px" />
                <span class="text-h6">Introduction à GoToucan</span>
              </q-card-section>
              <q-card-section>
                <span class="text-bold">Lors de cet atelier, vous apprendrez à :</span>
                <ul>
                  <li>
                    Utiliser les fonctions de base de l’application (calendrier, gestion des
                    personnes et ménages)
                  </li>
                  <li>Faire l’entrée des données requises (distribution des denrées)</li>
                </ul>
                <span class="text-bold">Pour participer :</span>
                <ol>
                  <li>
                    Assurez-vous d’avoir un identifiant
                    <a href="https://gotoucan.app/" target="_blank">GoToucan</a> (si vous n’en avez
                    pas, indiquez le à 
                    <a href="mailto:soutieninformatique@moissonestrie.com">soutieninformatique@moissonestrie.com)</a>
                  </li>
                  <li>
                    Faites votre
                    <a
                      href="https://doodle.com/sign-up-sheet/participate/5a32fcf3-c83a-4129-9571-e877751a452b/select"
                      target="_blank"
                      >inscription à un atelier</a
                    >
                  </li>
                </ol>
              </q-card-section>
              <div class="q-mt-md text-center"></div>
            </q-card>
          </q-carousel-slide>
        </q-carousel>

        <div class="row justify-center">
          <q-btn-toggle
            glossy
            v-model="slide"
            :options="[
              // { label: 1, value: 'introduction' },
              // { label: 2, value: 'fin' },
            ]"
          />
        </div>
      </q-card>
    </div>
    <SoutienNumerisation/>
    <InformationsGenerales/>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import InformationsGenerales from './InformationsGenerales.vue';
import SoutienNumerisation from './SoutienNumerisation.vue';

const slide = ref('introduction')
</script>
