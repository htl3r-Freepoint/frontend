import Vue from 'vue'
import VueRouter from 'vue-router'

import FlyerCustomizerView from "@/views/FlyerCustomizerView";
import QrCodeScanner from "@/views/QrCodeScanner";
import ResetPassword from "@/views/ResetPassword"
import TermsAndService from "@/views/TermsAndService";
import TermsAndServiceCompany from "@/views/TermsAndServiceCompany";
import Login from "@/views/Login";

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
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/terms-and-service',
    name: 'TermsAndService',
    component: TermsAndService
  },
  {
    path: '/terms-and-service-company',
    name: 'TermsAndServiceCompany',
    component: TermsAndServiceCompany
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router