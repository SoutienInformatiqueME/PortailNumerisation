<template>
  <v-card-title
    >Inviter d'autres personnes à rejoindre et gérer votre organisme sur
    GoToucan</v-card-title
  >
  <v-card-text>
    <v-container fluid>
      <v-row>
        <v-col>
          <p>
            1. Assurez-vous d'abord d'être connecté sur votre compte GoToucan
            puis de sélectionner la communauté de votre organisation.
          </p>
        </v-col>
        <v-col>
          <v-img
            src="/PortailNumerisation/docs/captures/connexion/homepage.png"
            alt="Accueil"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p>
            2. Vous devez ensuite faire la création de cette personne en
            utilisant le module Contact (sauf si la personne existe déjà dans
            vos contacts).
          </p>
        </v-col>
        <v-col>
          <v-img
            src="/PortailNumerisation/docs/captures/connexion/contacts.png"
            alt="Module Contact"
          />
        </v-col>
        <v-col>
          <v-img
            src="/PortailNumerisation/docs/captures/connexion/wand.png"
            alt="Baguette magique"
            height="100"
          />
        </v-col>
        <v-col>
          <v-img
            src="/PortailNumerisation/docs/captures/connexion/ajoutPersonne.png"
            alt="ajoutPersonne"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p>
            3. Une fois la personne créée, assurez-vous d'être sur la page de
            cette personne puis selectionnez la "baguette magique".
          </p>
        </v-col>
        <v-col>
          <v-img
            src="/PortailNumerisation/docs/captures/connexion/personne.png"
            alt="Module Contact"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p>4. Selectionnez l'outil "Invitations".</p>
        </v-col>
        <v-col>
          <v-img
            src="/PortailNumerisation/docs/captures/connexion/contexteInvitation.png"
            alt="Outil Invitations"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p>
            5. Suivez les instructions à l'écran pour finaliser l'invitation
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p>
            6. La personne recevra une invitation par courriel qui lui permettra
            de rejoindre la plateforme en créant son compte
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-card-text>
</template>

<style scoped>
.v-img {
  max-height: 250px;
}

.v-row {
  align-items: center;
  justify-content: left;
}

:deep(.v-row) {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}
</style>
