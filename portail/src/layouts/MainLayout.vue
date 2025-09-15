<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

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
