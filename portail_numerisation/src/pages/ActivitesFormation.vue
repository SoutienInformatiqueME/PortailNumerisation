<template>
  <h1>
    Activités de formation à la plateforme
    <a target="_blank" href="https://gotoucan.app/">
      GoToucan<i class="mdi mdi-open-in-new"></i>
    </a>
  </h1>
  <span>
    Les activités sont des périodes de 1h de vidéo-conférence en petits groupes
    où vous apprendrez à utiliser les différents modules de la plateforme.
  </span>
  <template v-for="(module, index) in modules">
    <v-card>
      <v-card-title>Module: {{ module.name }}</v-card-title>
      <v-card-text>
        <template v-for="(activity, index) in module.activities">
          <v-card>
            <v-card-title
              >Activité {{ index }}: {{ activity.name }}</v-card-title
            >
            <v-card-text>
              <template v-for="(subject, index) in activity.subjects">
                {{ index }}.
                <v-chip color="primary" v-tooltip="subject.description">
                  <a target="_blank" :href="subject.link">
                    {{ subject.name }}
                    <v-icon v-if="subject.link">mdi-open-in-new</v-icon>
                  </a> </v-chip
                ><br />
              </template>
            </v-card-text>
          </v-card>
        </template>
      </v-card-text>
    </v-card>
  </template>
</template>

<script>
export default {
  data() {
    return {
      modules: {
        contacts: {
          name: "Contacts et Événements",
          activities: {
            1: {
              name: "Personnes, ménages et organisations",
              subjects: {
                1: {
                  name: "Loi 25",
                  description:
                    "Loi sur l’accès aux documents des organismes publics et sur la protection des renseignements personnels",
                  link: "https://www.legisquebec.gouv.qc.ca/fr/document/lc/A-2.1",
                },
                2: {
                  name: "Gestion des organisations",
                  description:
                    "Accès à la plateforme GoToucan et gestion des invitations",
                },
                3: {
                  name: "Gestion des personnes et ménages",
                  description:
                    "Créations des personnes et association aux ménages",
                },
              },
            },
            2: {
              name: "Événements et Rapports",
              subjects: {
                1: {
                  name: "Gestion des évènements",
                  description:
                    "Création des évènements, spécifiquement ceux dans lesquels il y a distribution alimentaire",
                },
                2: {
                  name: "Génération des rapports",
                  description:
                    "Création des rapports de distribution alimentaire",
                },
              },
            },
          },
        },
        orders: {
          name: "Commandes et Partages",
          activities: {},
        },
        storage: {
          name: "Entreposage",
          activities: {},
        },
      },
    };
  },
};
</script>
