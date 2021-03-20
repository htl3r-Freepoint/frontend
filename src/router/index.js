import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {path: '/', component: () => import("@/views/Root.vue")},
    {path: '/forgot-password', component: () => import('@/views/ForgotPassword.vue')},
    {path: '/terms-and-service', component: () => import('@/views/TermsAndService.vue')},
    {path: '/terms-and-service-company', component: () => import('@/views/TermsAndServiceCompany.vue')},
    {path: '/imprint', component: () => import('@/views/Imprint.vue')},
    {path: '/privacy-policy', component: () => import('@/views/PrivacyPolicy.vue')},
    {path: '/login', component: () => import('@/views/Login.vue')},
    {path: '/register', component: () => import('@/views/RegisterUser.vue')},
    {path: '/register/company', component: () => import('@/views/RegisterCompany.vue')},
    {path: '/scan', component: () => import('@/views/QrCodeScanner.vue')},
    {path: '/cashier', component: () => import('@/views/CashierQrCode.vue')},
    {path: '/inventar', component: () => import('@/views/RabattInventar.vue')},
    {
        path: '/user', component: () => import('@/views/User.vue'),
        children: [
            {path: 'profile', component: () => import('@/views/user/Profile.vue')},
            {path: 'info', component: () => import('@/views/user/Info.vue')},
            {path: 'help', component: () => import('@/views/user/Help.vue')},
            {path: 'feedback', component: () => import('@/views/user/Feedback.vue')}
        ]
    },
    {
        path: '/company', component: () => import('@/views/Company.vue'),
        children: [
            {path: 'coupons', component: () => import('@/views/company/RabattMenu.vue')},
            {path: 'coupons/edit', component: () => import('@/views/company/RabattMenuEdit.vue')},
            {
                path: 'settings', component: () => import('@/views/company/Settings.vue'),
                children: [
                    {path: 'profile', component: () => import('@/views/company/settings/Profile.vue')},
                    {path: 'design', component: () => import('@/views/company/settings/Design')},
                    {path: 'flyer', component: () => import('@/views/company/settings/FlyerCustomizer.vue')},
                    {path: 'location', component: () => import('@/views/company/settings/Location.vue')},
                    {path: 'staff', component: () => import('@/views/company/settings/Staff.vue')},
                    {path: 'statistics', component: () => import('@/views/company/settings/Statistics.vue')},
                    {path: 'info', component: () => import('@/views/company/settings/Info.vue')}
                ]
            }
        ]
    },
    {path: '/nearby', component: () => import('@/views/NearbyStores.vue')}
]

export default new VueRouter({
    /*mode: 'history',*/
    routes
})