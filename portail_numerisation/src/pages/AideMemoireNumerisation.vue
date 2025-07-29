<template>
  <v-container fluid class="fill-height pa-0">
    <v-card class="d-flex flex-column fill-height w-100">
      <v-card-title>Aide-Mémoire Numérisation</v-card-title>
      <v-card-text class="flex-grow-1 pa-0" style="height: 80vh; width: 160vh">
        <iframe :src="'./docs/aide-mémoire-numérisation.pdf'" type="application/pdf" width="100%" height="100%" />
      </v-card-text>
    </v-card>
  </v-container>
</template>