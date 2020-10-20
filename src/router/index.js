import { createRouter, createWebHashHistory } from 'vue-router'


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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
