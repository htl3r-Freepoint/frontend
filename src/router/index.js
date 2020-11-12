import Vue from 'vue'
import VueRouter from 'vue-router'

import FlyerCustomizer from "@/views/FlyerCustomizer";
import QrCodeScanner from "@/views/QrCodeScanner";

Vue.use(VueRouter);

const routes = [
  {
    path: '/flyer',
    name: 'FlyerCustomizer',
    component: FlyerCustomizer
  },
  {
    path: '/scan',
    name: 'QrCodeScanner',
    component: QrCodeScanner
  }]

const router = new VueRouter({
  routes
})

export default router