<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->

        <q-toolbar-title class="bg-primary flex flex-center">
          <span>Portail numérisation par</span>
          <q-img alt="Logo Moisson Estrie"
            src="https://cdn-ch-prod-bqhwa0ewbpg6eyc2.z01.azurefd.net/prod-img-cache/CDN-ik-images/charityprofile/4/3193/Moisson-Estrie-logo-01_vpD2TEh.png"
            fit="contain" style="max-height: 10vh" />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >Pages
        </q-item-label>
        <q-item clickable v-ripple to="/" active-class="active">
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                Accueil
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple :to="{ path: '/informations' }" active-class="active">
              <q-item-section avatar>
                <q-icon name="info" />
              </q-item-section>

              <q-item-section>
                Informations
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple :to="{ path: '/soutien' }" active-class="active">
              <q-item-section avatar>
                <q-icon name="support_agent" />
              </q-item-section>

              <q-item-section>
                Soutien
              </q-item-section>
            </q-item>

            <q-item>
              v 1.0
            </q-item>
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
      <span style="position: fixed; bottom: 10px; right: 10px;">Dernière révision : {{ formattedCommitDate }} à {{ formattedCommitTime }} ({{ commitHash }})</span>
    </q-page-container>
  </q-layout>
</template>

<script setup>
const commitHash = process.env.LAST_COMMIT_HASH
const rawCommitDate = process.env.LAST_COMMIT_DATE || ''
let formattedCommitDate = ''
if (rawCommitDate) {
  const date = new Date(rawCommitDate)
  formattedCommitDate = new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date).replace(',', ' à')
}
let formattedCommitTime = ''
if (rawCommitDate) {
  const date = new Date(rawCommitDate)
  formattedCommitTime = new Intl.DateTimeFormat('fr-FR', {
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

// import { ref } from 'vue'

// const leftDrawerOpen = ref(true)

// function toggleLeftDrawer () {
//   leftDrawerOpen.value = !leftDrawerOpen.value
// }
</script>