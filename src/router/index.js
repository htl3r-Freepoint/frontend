import Vue from 'vue'
import VueRouter from 'vue-router'

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
    component: () => import('../views/QrCodeScanner.vue')
  }
]

export default new VueRouter({
  routes
})
