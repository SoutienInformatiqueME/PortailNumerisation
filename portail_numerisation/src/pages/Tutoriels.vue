<script setup>
import homepage from '@/assets/captures/connexion/homepage.png';
</script>

<template>
  <v-card>
    <v-tabs v-model="tab">
      <v-tab value="Connexion">Connexion</v-tab>
      <v-tab value="two">Item Two</v-tab>
      <v-tab value="three">Item Three</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="Connexion">
          <v-card>
            <v-card-title>Rejoindre GoToucan en tant que première personne de votre organisme à vous y
              connecter</v-card-title>
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
          <v-card>
            <v-card-title>Inviter d'autres personnes à rejoindre votre organisme sur GoToucan</v-card-title>
            <v-card-text>
              <div>
                <span>Connectez-vous à votre compte sur GoToucan puis sélectionnez la communauté de votre organisme.</span>
                <v-img contain :src="homepage" alt="homepage.png"></v-img>
              </div> 
              <br /><span>Pour inviter quelqu'un, vous devez d'abord faire la création de cette personne en utilisant le
                module Contact (sauf si vous l'avez précédement fait).</span>
              <br /><span>Une fois la personne crée, assurez-vous d'être sur la page de la personne puis sélectionnez la "baguette magique".</span>
              <br /><span>Sélectionnez l'outil "Invitations".</span>
              <br /><span>Suivez les instructions à l'écran pour finaliser l'invitation.</span>
            </v-card-text>
          </v-card>
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
  }),
}
</script>