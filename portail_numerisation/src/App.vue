<script setup>
import Navigation from './layouts/Navigation.vue';
</script>

<template>
  <v-app>
    <Navigation />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>