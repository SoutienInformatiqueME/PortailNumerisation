<template>
  <q-page class="flex flex-center">
    <div class="q-pa-sm">
      <q-card>
        <!-- <q-card-section>
          <div class="text-h5 text-center">Atelier de formation</div>
        </q-card-section> -->
        <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" animated
          control-color="primary" class="rounded-borders bg-transparent" swipeable style="height: 70vh;">
          <q-carousel-slide name="introduction" class="column no-wrap flex-center">
            <q-card class="bg-secondary" bordered>
              <div class="text-h5 text-center">Atelier de formation</div>
              <q-card-section class="row items-center">
                <q-icon name="looks_one" color="primary" size="30px" />
                <span class="text-h6">Introduction à GoToucan</span>
              </q-card-section>
              <q-card-section>
                <span class="text-bold">Lors de cet atelier, vous apprendrez à :</span>
                <ul>
                  <li>
                    Utiliser les fonctions de base de l’application (calendrier, gestion des
                    personnes et ménages)
                  </li>
                  <li>Faire l’entrée des données requises (distribution des denrées)</li>
                </ul>
                <span class="text-bold">Pour participer :</span>
                <ol>
                  <li>
                    Assurez-vous d’avoir un identifiant
                    <a href="https://gotoucan.app/" target="_blank">GoToucan</a> (si vous n’en avez
                    pas, indiquez le à
                    <a href="mailto:soutieninformatique@moissonestrie.com">soutieninformatique@moissonestrie.com)</a>
                  </li>
                  <li>
                    Faites votre
                    <a href="https://doodle.com/sign-up-sheet/participate/5a32fcf3-c83a-4129-9571-e877751a452b/select"
                      target="_blank">inscription à un atelier</a>
                  </li>
                </ol>
              </q-card-section>
              <div class="q-mt-md text-center"></div>
            </q-card>
          </q-carousel-slide>

          <q-carousel-slide name="soutien" class="column no-wrap flex-center">
            <q-card bordered>
              <div class="text-h5 text-center">Soutien à la numérisation</div>
              <q-card-section>
                <p>
                  <a target="_blank"
                    href="https://www.moissonestrie.com/pages/notre-equipe#shopify-section-template--17135021883578__block_text_columns_HtN9d3">Maxime
                    Roy<i class="mdi mdi-open-in-new"></i>
                  </a>
                  (iel/elle/il)
                  <br />
                  <b>Responsable du soutien informatique et de la numérisation</b>
                </p>
                <p>
                  Courriel:
                  <a target="_blank"
                    href="mailto:soutieninformatique@moissonestrie.com">soutieninformatique@moissonestrie.com</a>
                  <br />Téléphone: 819-822-6025 poste 142
                  <br />
                  <a target="_blank"
                    href="https://outlook.office.com/bookwithme/user/910ea8cb90754f7fa6b64220116673ee@moissonestrie.com?anonymous&ep=signature&ismsaljsauthenabled">Planifier
                    une rencontre pour un soutien à la numérisation (Microsoft Booking)<i
                      class="mdi mdi-open-in-new"></i>
                  </a>
                </p>
                <p class="blockquote">
                  Dès maintenant, je suis disponible pour du soutien ponctuel concernant le logiciel
                  <a target="_blank" href="https://gotoucan.app/">GoToucan<i class="mdi mdi-open-in-new"></i>
                  </a>
                  et les plateformes de formation. <br />Pour les systèmes qui ne peuvent être remplacés, je serai
                  également en mesure de vous guider vers une solution permettant le<br /> transfert automatisé des
                  données requises lorsque le module d'API de GoToucan sera disponible.
                </p>
              </q-card-section>
            </q-card>
          </q-carousel-slide>

          <q-carousel-slide name="informations">
              <q-card>
                <q-card-section>
                  <div class="text-h5 text-center">Informations générales</div>
                  <div class="text-body1">
                    Tel que formulé par

                    <a target="_blank" href="https://foodbankscanada.ca/fr/">
                      <q-img
                        src="https://foodbankscanada.ca/app/themes/fbc-theme/public/build/assets/fbc-logo-Cxoc7hPD.svg"
                        fit="contain" style="max-width: 12vw; max-height: 6vh;">
                        <q-tooltip>Banques alimentaires Québec</q-tooltip>
                      </q-img>
                      <q-icon name="open_in_new" class="q-ml-sm" /> </a>&nbsp;, les statistiques sur l'aide alimentaire
                    seront prochainement complilées
                    mensuellement. Pour atteindre cet objectif,

                    <a target="_blank" href="https://banquesalimentaires.org/">
                      <q-img src="https://banquesalimentaires.org/wp-content/uploads/2024/04/BAQ_Logo_Full.svg"
                        fit="contain" style="max-width: 12vw; max-height: 6vh;">
                        <q-tooltip>Banques alimentaires Quebec</q-tooltip>
                      </q-img>
                      <q-icon name="open_in_new" class="q-ml-sm" />
                    </a>

                    introduit le logiciel

                    <a target="_blank" href="https://gotoucan.app/">GoToucan<q-icon name="open_in_new"
                        class="q-ml-sm" /></a>

                    développé par

                    <a target="_blank" href="https://www.toucansolutions.ca/">
                      <q-img src="https://framerusercontent.com/images/b0QoexMfTtvOyKIhpXmF9rOgNsU.png" fit="contain"
                        style="max-width: 12vw; max-height: 6vh;">
                        <q-tooltip>Toucan Solutions</q-tooltip>
                      </q-img>
                      <q-icon name="open_in_new" class="q-ml-sm" /> </a>&nbsp;. En plus d’offrir une multitude de
                    fonctionnalités adaptées aux opérations des
                    organismes qui font de l'aide alimentaire, GoToucan facilite grandement la collecte des
                    données nécessaires au Bilan-Faim. Pour accompagner ses organismes accrédités, Moisson
                    Estrie propose des activités de formation et du soutien ponctuel visant à assurer un usage
                    confortable et autonome du logiciel GoToucan.
                  </div>
                </q-card-section>
                <q-card-actions>
                  <q-btn target="_blank" href="https://drive.google.com/file/d/1bJRx67J9LodKta_Ql_4lmi2XdH2Qhxwl/view?usp=sharing">
                    BAQ - Aide-mémoire Numérisation
                    <q-icon name="open_in_new" class="q-ml-sm" />
                  </q-btn>
                </q-card-actions>
              </q-card>
              <q-card>
                <q-card class="q-ma-md">
                  <q-card-section>
                    <div class="text-h5 text-center">Ressources</div>
                  </q-card-section>
                  <q-card-section>
                    <a target="_blank" href="https://pr2.ca/" class="row items-center no-wrap">
                      <img src="https://pr2.ca/wp-content/uploads/2024/02/logo-bleu-fond-transp-9-Copie-300x184.png"
                        height="50" alt="PR2" />
                      <q-icon name="mdi-open-in-new" class="q-ml-sm" />
                    </a>
                  </q-card-section>

                  <q-card-section>
                    <blockquote
                      cite="https://drive.google.com/file/d/1bJRx67J9LodKta_Ql_4lmi2XdH2Qhxwl/view?usp=sharing">
                      C'est la firme qui a créé et maintient à jour le matériel de formation et qui accompagne
                      les organismes pendant leur apprentissage et leurs premiers pas sur la plateforme.
                    </blockquote>
                    <p>
                      —
                      <cite>
                        <a target="_blank"
                          href="https://drive.google.com/file/d/1bJRx67J9LodKta_Ql_4lmi2XdH2Qhxwl/view?usp=sharing">BAQ
                          - Aide-mémoire Numérisation<q-icon name="mdi-open-in-new" /></a>
                      </cite>
                    </p>
                    <p>
                      <b>Programme de numérisation des activités d'aide alimentaire sur Oodo</b>
                      <br />
                      Activités de formation et forum en lien avec la numérisation.
                      <br />
                      Vous devez d'abord vous inscrire en suivant le lien ci-dessous.
                    </p>
                  </q-card-section>

                  <q-card-actions>
                    <q-btn target="_blank"
                      href="https://pr2ca.odoo.com/survey/start/13829410-d4eb-453f-ad8c-730789dada71"
                      label="Inscription" />
                    <q-btn target="_blank" href="https://pr2ca.odoo.com/slides" label="Plateforme de formation Oodo" />
                  </q-card-actions>
                </q-card>

                <q-card class="q-ma-md">
                  <q-card-section>
                    <a target="_blank" href="https://www.toucansolutions.ca/" class="row items-center no-wrap">
                      <img height="50" src="https://framerusercontent.com/images/b0QoexMfTtvOyKIhpXmF9rOgNsU.png"
                        alt="Toucan Solution" />
                      <q-icon name="mdi-open-in-new" class="q-ml-sm" />
                    </a>
                  </q-card-section>
                  <q-card-section>
                    <blockquote
                      cite="https://drive.google.com/file/d/1bJRx67J9LodKta_Ql_4lmi2XdH2Qhxwl/view?usp=sharing">
                      C'est le développeur de la plateforme de numérisation
                      <a target="_blank" href="https://gotoucan.app/">GoToucan<q-icon name="mdi-open-in-new" /></a>.
                    </blockquote>
                    <p>
                      —
                      <cite>
                        <a target="_blank"
                          href="https://drive.google.com/file/d/1bJRx67J9LodKta_Ql_4lmi2XdH2Qhxwl/view?usp=sharing">BAQ
                          - Aide-mémoire Numérisation<q-icon name="mdi-open-in-new" /></a>
                      </cite>
                    </p>
                  </q-card-section>
                </q-card>

                <q-card class="q-ma-md">
                  <q-card-section>
                    <a target="_blank" href="https://www.moissonestrie.com/" class="row items-center no-wrap">
                      <img
                        src="https://cdn-ch-prod-bqhwa0ewbpg6eyc2.z01.azurefd.net/prod-img-cache/CDN-ik-images/charityprofile/4/3193/Moisson-Estrie-logo-01_vpD2TEh.png"
                        height="50" alt="Moisson Estrie" />
                      <q-icon name="mdi-open-in-new" class="q-ml-sm" />
                    </a>
                  </q-card-section>
                  <q-card-section>
                    <blockquote
                      cite="https://drive.google.com/file/d/1bJRx67J9LodKta_Ql_4lmi2XdH2Qhxwl/view?usp=sharing">
                      Les membres de BAQ sont responsables de transmettre l'information sur le projet à leurs
                      organismes accrédités et de s'assurer que ceux-ci l'intègrent dans les délais prévus.
                      C'est la Moisson ou le membre associé qui est responsable d'inviter ses organismes à la
                      plateforme GoToucan et de leur envoyer le lien d'accès aux formations.
                    </blockquote>
                    <p>
                      —
                      <cite>
                        <a target="_blank"
                          href="https://drive.google.com/file/d/1bJRx67J9LodKta_Ql_4lmi2XdH2Qhxwl/view?usp=sharing">BAQ
                          - Aide-mémoire Numérisation<q-icon name="mdi-open-in-new" /></a>
                      </cite>
                    </p>
                  </q-card-section>
                </q-card>
                <q-card>
                  <q-card class="q-ma-md">
                    <q-card-section>
                      <a target="_blank" href="https://foodbankscanada.ca/fr/" class="row items-center no-wrap">
                        <img
                          src="https://foodbankscanada.ca/app/themes/fbc-theme/public/build/assets/fbc-logo-Cxoc7hPD.svg"
                          height="50" alt="Banques alimentaires Québec" />
                        <q-icon name="mdi-open-in-new" class="q-ml-sm" />
                      </a>
                    </q-card-section>
                    <q-card-section>
                      <blockquote
                        cite="https://drive.google.com/file/d/1bJRx67J9LodKta_Ql_4lmi2XdH2Qhxwl/view?usp=sharing">
                        C'est l'organisme national à l'origine du Bilan-Faim et initiateur du projet de
                        numérisation.
                      </blockquote>
                      <p>
                        —
                        <cite>
                          <a target="_blank"
                            href="https://drive.google.com/file/d/1bJRx67J9LodKta_Ql_4lmi2XdH2Qhxwl/view?usp=sharing">BAQ
                            - Aide-mémoire Numérisation<q-icon name="mdi-open-in-new" /></a>
                        </cite>
                      </p>
                    </q-card-section>
                  </q-card>

                  <q-card class="q-ma-md">
                    <q-card-section>
                      <a target="_blank" href="https://banquesalimentaires.org/" class="row items-center no-wrap">
                        <img src="https://banquesalimentaires.org/wp-content/uploads/2024/04/BAQ_Logo_Full.svg"
                          height="50" alt="Banques alimentaires Quebec" />
                        <q-icon name="mdi-open-in-new" class="q-ml-sm" />
                      </a>
                    </q-card-section>
                    <q-card-section>
                      <blockquote
                        cite="https://drive.google.com/file/d/1bJRx67J9LodKta_Ql_4lmi2XdH2Qhxwl/view?usp=sharing">
                        C'est l'association provinciale qui regroupe 33 membres (Moisson et associés) et qui est
                        responsable du déploiement de
                        <a target="_blank" href="https://gotoucan.app/">GoToucan<q-icon name="mdi-open-in-new" /></a>
                        auprès de ses membres et leurs organismes accrédités.
                      </blockquote>
                      <p>
                        —
                        <cite>
                          <a target="_blank"
                            href="https://drive.google.com/file/d/1bJRx67J9LodKta_Ql_4lmi2XdH2Qhxwl/view?usp=sharing">BAQ
                            - Aide-mémoire Numérisation<q-icon name="mdi-open-in-new" /></a>
                        </cite>
                      </p>
                    </q-card-section>
                  </q-card>
                </q-card>
              </q-card>
          </q-carousel-slide>
        </q-carousel>

        <div class="row justify-center">
          <q-btn-toggle glossy v-model="slide" :options="[
            { label: 1, value: 'introduction' },
            { label: 2, value: 'soutien' },
            { label: 3, value: 'informations' }
          ]" />
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const slide = ref('introduction')
</script>
