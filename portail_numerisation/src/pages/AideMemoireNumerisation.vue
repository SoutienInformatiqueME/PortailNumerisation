<template>
  <v-container fluid class="fill-height pa-0">
    <v-card class="d-flex flex-column fill-height w-100">
      <v-card-title>Aide-Mémoire Numérisation</v-card-title>
      <v-card-text class="flex-grow-1 pa-0">
        <iframe
          :src="pdfUrl"
          type="application/pdf"
          width="100%"
          height="100%"
          style="border: none"
        ></iframe>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import pdfUrl from "/docs/aide-mémoire-numérisation.pdf?url";
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
</style>
