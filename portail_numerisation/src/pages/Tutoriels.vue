<script setup>
import OrgCreation from "@/pages/tutoriels/connexion/OrgCreation.vue";
import Invitations from "@/pages/tutoriels/connexion/Invitations.vue";
</script>

<template>
  <v-card>
    <v-tabs v-model="tab">
      <v-tab value="Connexion">Connexion</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="Connexion">
          <v-card>
            <org-creation />
          </v-card>
          <v-card>
            <Invitations />
          </v-card>
        </v-tabs-window-item>

        <v-tabs-window-item value="two"> Two </v-tabs-window-item>

        <v-tabs-window-item value="three"> Three </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    tab: null,
  }),
};
</script>

<style scoped>
.step {
  max-height: 50vh;
  max-width: 25vw;
}
</style>
