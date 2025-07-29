<script setup>
const pdfUrl = `${import.meta.env.BASE_URL}docs/aide-mémoire-numérisation.pdf`
</script>

<template>
  <v-container fluid class="fill-height pa-0">
    <v-card class="d-flex flex-column fill-height w-100">
      <v-card-title>Aide-Mémoire Numérisation</v-card-title>
      <v-card-text class="flex-grow-1 pa-0" style="height: 80vh; width: 95%">
        <iframe :src="pdfUrl" type="application/pdf" width="100%" height="100%" style="border: none"></iframe>
      </v-card-text>
    </v-card>
  </v-container>
</template>