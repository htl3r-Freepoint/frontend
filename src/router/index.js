import Vue from 'vue'
import VueRouter from 'vue-router'

import FlyerCustomizer from "@/views/FlyerCustomizer";
import QrCodeScanner from "@/views/QrCodeScanner";

Vue.use(VueRouter);

const routes = [
    {
        path: '/flyer',
        name: 'FlyerCustomizer',
        component: () => import('../views/FlyerCustomizerView.vue')
    },
    {
        path: '/scan',
        name: 'QrCodeScanner',
        component: () => import('../views/QrCodeScannerView.vue')
    },
    {
        path: '/menu',
        name: 'RabattMenu',
        component: () => import('../views/RabattMenuView.vue')
    }
]

const router = new VueRouter({
  routes
})

export default router