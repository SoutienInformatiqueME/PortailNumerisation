<script setup>
import Navigation from './layouts/Navigation.vue';
import altNav from './layouts/altNav.vue';
</script>

<template>
  <v-app style="background: linear-gradient(135deg, rgba(0, 255, 34, 0) 60%, rgba(245, 163, 39, 0.911));">
    <altNav />
    <v-main>
      <!-- <router-view /> -->
    </v-main>
  </v-app>
</template>