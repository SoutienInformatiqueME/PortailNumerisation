<template>
    <v-navigation-drawer expand-on-hover rail>
        <v-list>
            <v-list-item
                prepend-avatar="https://www.moissonestrie.com/cdn/shop/files/3769_geodir_logo_12510294-597224803768615-8795392792948671030-n_32x32.png?v=1715785600"
                subtitle="par Moisson Estrie" title="Portail Numérisation"></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home" title="Accueil"
                :to="{ path: '/PortailNumerisation/' }"></v-list-item>
            <v-list-item prepend-icon="mdi-face-agent" title="Soutien"
                :to="{ path: '/PortailNumerisation/Soutien' }"></v-list-item>
            <v-list-item prepend-icon="mdi-school" title="Tutoriels"
                :to="{ path: '/PortailNumerisation/Tutoriels' }"></v-list-item>
            <v-list-item prepend-icon="mdi-ticket" title="Activités de formation"
                :to="{ path: '/PortailNumerisation/ActivitesFormation' }"></v-list-item>
            <v-list-item prepend-icon="mdi-link" title="Ressources externes"
                :to="{ path: '/PortailNumerisation/RessourcesExternes' }"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
