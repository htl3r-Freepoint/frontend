import Vue from 'vue'
import VueRouter from 'vue-router'

import FlyerCustomizerView from "@/views/FlyerCustomizerView";
import QrCodeScanner from "@/views/QrCodeScanner";

Vue.use(VueRouter);

const routes = [
  {
    path: '/flyer',
    name: 'FlyerCustomizer',
    component: FlyerCustomizerView
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