import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/reset-password',
        name: 'ResetPassword',
        component: () => import('../views/ResetPassword.vue')
    },
    {
        path: '/terms-and-service',
        name: 'TermsAndService',
        component: () => import('../views/TermsAndService.vue')
    },
    {
        path: '/terms-and-service-company',
        name: 'TermsAndServiceCompany',
        component: () => import('../views/TermsAndServiceCompany.vue')
    },
    {
        path: '/login',
        name: 'LoginUser',
        component: () => import('../views/LoginUser.vue')
    },
    {
        path: '/register',
        name: 'RegisterUser',
        component: () => import('../views/RegisterUser.vue')
    },
    {
        path: '/register/company',
        name: 'RegisterCompany',
        component: () => import('../views/RegisterCompany.vue')
    },
    {
        path: '/scan',
        name: 'QrCodeScanner',
        component: () => import('../views/QrCodeScanner.vue')
    },
    {
        path: '/menu',
        name: 'RabattMenu',
        component: () => import('../views/RabattMenu.vue')
    },
    {
        path: '/inventar',
        name: 'RabattInventar',
        component: () => import('../views/RabattInventar.vue')
    },
    {
        path: '/company/settings',
        name: 'CompanySettingsMobile',
        component: () => import('../views/CompanySettings.vue'),
        children: [
            {
                path: 'profile',
                name: 'CompanyProfile',
                component: () => import('../views/settingsCompany/Profile.vue')
            },
            {
                path: 'design',
                name: 'Design',
                component: () => import('../views/settingsCompany/Design')
            },
            {
                path: 'flyer',
                name: 'Flyer',
                component: () => import('../views/settingsCompany/Flyer-Customizer.vue')
            },
            {
                path: 'location',
                name: 'Location',
                component: () => import('../views/settingsCompany/Location.vue')
            },
            {
                path: 'staff',
                name: 'Staff',
                component: () => import('../views/settingsCompany/Staff.vue')
            },
            {
                path: 'statistics',
                name: 'Statistics',
                component: () => import('../views/settingsCompany/Statistics.vue')
            }
        ]
    },
    {
        path: '/user/settings',
        name: 'UserSettingsMobile',
        component: () => import('../views/UserSettings.vue')
    },
    {
        path: '/settings/user/profile',
        name: 'Profile',
        component: () => import('../views/settingsUser/Profile.vue')
    },
    {
        path: '/settings/user/info',
        name: 'Info',
        component: () => import('../views/settingsUser/Info.vue')
    },
    {
        path: '/settings/user/help',
        name: 'Help',
        component: () => import('../views/settingsUser/Help.vue')
    },
    {
        path: '/settings/user/feedback',
        name: 'Feedback',
        component: () => import('../views/settingsUser/Feedback.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router