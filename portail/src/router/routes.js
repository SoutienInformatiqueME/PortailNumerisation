const routes = [
    {
        path: '/',
        component: () => import ('layouts/MainLayout.vue'),
        children: [
            {
                path: '',
                component: () => import ('pages/IndexPage.vue')
            }
        ]
    }, {
        path: '/informations',
        component: () => import ('layouts/MainLayout.vue'),
        children: [
            {
                path: '',
                component: () => import ('pages/InformationsGenerales.vue')
            }
        ]
    }, {
        path: '/soutien',
        component: () => import ('layouts/MainLayout.vue'),
        children: [
            {
                path: '',
                component: () => import ('pages/SoutienNumerisation.vue')
            }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import ('pages/ErrorNotFound.vue')
    },
]

export default routes
