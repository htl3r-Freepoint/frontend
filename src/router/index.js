import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/reset-password',
        component: () => import('../views/ResetPassword.vue')
    },
    {
        path: '/terms-and-service',
        component: () => import('../views/TermsAndService.vue')
    },
    {
        path: '/terms-and-service-company',
        component: () => import('../views/TermsAndServiceCompany.vue')
    },
    {
        path: '/login',
        component: () => import('../views/LoginUser.vue')
    },
    {
        path: '/register',
        component: () => import('../views/RegisterUser.vue')
    },
    {
        path: '/register/company',
        component: () => import('../views/RegisterCompany.vue')
    },
    {
        path: '/scan',
        component: () => import('../views/QrCodeScanner.vue')
    },
    {
        path: '/cashier',
        component: () => import('../views/CashierQrCode.vue')
    },
    {
        path: '/menu',
        component: () => import('../views/RabattMenu.vue')
    },
    {
        path: '/inventar',
        component: () => import('../views/RabattInventar.vue')
    },
    {
        path: '/user/settings',
        component: () => import('../views/UserSettings.vue'),
        children: [
            {
                path: 'profile',
                component: () => import('../views/userSettings/Profile.vue')
            },
            {
                path: 'info',
                component: () => import('../views/userSettings/Info.vue')
            },
            {
                path: 'help',
                component: () => import('../views/userSettings/Help.vue')
            },
            {
                path: 'feedback',
                component: () => import('../views/userSettings/Feedback.vue')
            }
        ]
    },
    {
        path: '/company/settings',
        component: () => import('../views/CompanySettings.vue'),
        children: [
            {
                path: 'profile',
                component: () => import('../views/settingsCompany/Profile.vue')
            },
            {
                path: 'design',
                component: () => import('../views/settingsCompany/Design')
            },
            {
                path: 'flyer',
                component: () => import('../views/settingsCompany/Flyer-Customizer.vue')
            },
            {
                path: 'location',
                component: () => import('../views/settingsCompany/Location.vue')
            },
            {
                path: 'staff',
                component: () => import('../views/settingsCompany/Staff.vue')
            },
            {
                path: 'statistics',
                component: () => import('../views/settingsCompany/Statistics.vue')
            },
            {
                path: 'info',
                component: () => import('../views/settingsCompany/Info.vue')
            }
        ]
    }
]

export default new VueRouter({
    routes
})