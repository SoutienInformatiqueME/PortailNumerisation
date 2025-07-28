<script setup>
import homepage from '@/assets/captures/connexion/homepage.png';
import personne from '@/assets/captures/connexion/personne.png';
import contacts from '@/assets/captures/connexion/contacts.png';
import ajoutPersonne from '@/assets/captures/connexion/ajoutPersonne.png';
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
            <v-card-title>
              Rejoindre GoToucan et la communauté de votre organisme à vous y connecter
            </v-card-title>
            <v-card-text>
              <span>
                Vous devez d'abord communiquer avec Moisson Estrie (<a target="_blank"
                  href="mailto:soutieninformatique@moissonestrie.com">soutieninformatique@moissonestrie.com<i
                    class="mdi mdi-open-in-new"></i>
                </a>) pour recevoir une invitation à rejoindre la plateforme. Vous devez indiquer avec quelle adresse
                courriel vous souhaitez créer votre compte.
                <br />Vous pourrez ensuite suivre le lien qui vous sera envoyé par
                courriel pour la création du compte.
                <br><b>Ne partagez pas vos informations de connexion: Pour votre sécurité et celle des personnes dont
                  les informations seront disponibles dans GoToucan, assurez vous que chaque personne ait un accès
                  individuel.</b>
              </span>
            </v-card-text>
          </v-card>
          <!-- <v-card>
            <v-card-title>Inviter d'autres personnes à rejoindre votre organisme sur GoToucan</v-card-title>
            <v-card-text class="d-flex flex-wrap">
              <template v-for="(step, index) in steps[0].invitation" :key="index">
                <v-card class="step">
                  <span>{{ index + 1 }}. </span>
                  <span>{{ step.text }}</span>
                  <v-img :src="step.image" />
                </v-card>
              </template>
</v-card-text>
</v-card> -->
        </v-tabs-window-item>

        <v-tabs-window-item value="two">
          Two
        </v-tabs-window-item>

        <v-tabs-window-item value="three">
          Three
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    // steps: [
    //   {
    //     invitation: [
    //       {
    //         text: 'Ensuite, vous devez faire la création de cette personne en utilisant le module Contact (sauf si la personne existe déjà dans vos contacts).',
    //         image: contacts,
    //       },
    //       {
    //         text: 'Une fois la personne créée, assurez-vous d\'être sur la page de la personne puis sélectionnez la "baguette magique".',
    //         image: personne,
    //       },
    //       {
    //         text: 'Sélectionnez l\'outil "Invitations".',
    //         image: ajoutPersonne,
    //       },
    //       {
    //         text: 'Suivez les instructions à l\'écran pour finaliser l\'invitation',
    //         image: ajoutPersonne,
    //       },
    //     ],
    //     first: [
    //       {
    //         text: 'Ensuite, vous devez faire la création de cette personne en utilisant le module Contact (sauf si la personne existe déjà dans vos contacts).',
    //         image: contacts,
    //       },
    //       {
    //         text: 'Une fois la personne créée, assurez-vous d\'être sur la page de la personne puis sélectionnez la "baguette magique".',
    //         image: personne,
    //       },
    //       {
    //         text: 'Sélectionnez l\'outil "Invitations".',
    //         image: ajoutPersonne,
    //       },
    //       {
    //         text: 'Suivez les instructions à l\'écran pour finaliser l\'invitation',
    //         image: ajoutPersonne,
    //       },
    //     ],
    //   },
    // ],
  }),
}
</script>

<style scoped>
.step {
  max-height: 50vh;
  max-width: 25vw;
}
</style>
