<script setup>
import { useRoute } from 'vue-router';
</script>

<template>
    <!-- TODO : navigation mobile -->
    <!-- expand-on-hover :rail="$route.path !== '/PortailNumerisation/'" -->
    <v-navigation-drawer  expand-on-hover rail>
        <div>
            <v-list>
                <v-list-item :to="{ path: '/PortailNumerisation/' }"
                    prepend-avatar="https://www.moissonestrie.com/cdn/shop/files/3769_geodir_logo_12510294-597224803768615-8795392792948671030-n_32x32.png?v=1715785600"
                    subtitle="par Moisson Estrie" title="Portail Numérisation">
                </v-list-item>
            </v-list>
        </div>
        <v-divider />
        <v-list nav>
            <v-list-item prepend-icon="mdi-face-agent" title="Soutien"
                :to="{ path: '/PortailNumerisation/Soutien' }"></v-list-item>
            <v-list-item ripple="orange" active-class="orange" prepend-icon="mdi-school" title="Tutoriels"
                :to="{ path: '/PortailNumerisation/Tutoriels' }"></v-list-item>
            <v-list-item prepend-icon="mdi-ticket" title="Activités de formation"
                :to="{ path: '/PortailNumerisation/ActivitesFormation' }"></v-list-item>
            <v-list-item prepend-icon="mdi-link" title="Ressources externes"
                :to="{ path: '/PortailNumerisation/RessourcesExternes' }"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<style scoped>
.v-list-item:hover,
.v-list-item--active {
    background-color: orange;
    /* orange color */
}
</style>