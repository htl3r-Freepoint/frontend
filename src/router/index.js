import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/reset-password',
        name: 'ResetPassword',
        component: () => import('../views/ResetPassword')
    },
    {
        path: '/terms-and-service',
        name: 'TermsAndService',
        component: () => import('../views/TermsAndService')
    },
    {
        path: '/terms-and-service-company',
        name: 'TermsAndServiceCompany',
        component: () => import('../views/TermsAndServiceCompany')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login')
    },
    {
        path: '/flyer',
        name: 'FlyerCustomizer',
        component: () => import('../views/FlyerCustomizer.vue')
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
    }
]

const router = new VueRouter({
    routes
})

export default router