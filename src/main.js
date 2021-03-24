import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import {FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText} from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

import Axios from "axios";
import $ from 'jquery'
import './registerServiceWorker'
import Palette from "@/assets/classes/Palette";

Vue.use(Vuex)

Vue.config.productionTip = false

Vue.prototype.$http = Axios
Vue.prototype.$ = $

const bsTooltip = (el, binding) => {
    const t = []

    if (binding.modifiers.focus) t.push('focus')
    if (binding.modifiers.hover) t.push('hover')
    if (binding.modifiers.click) t.push('click')
    if (!t.length) t.push('hover')

    $(el).tooltip({
        title: binding.value,
        placement: binding.arg || 'top',
        trigger: t.join(' '),
        html: !!binding.modifiers.html,
    });
}

Vue.directive('tooltip', {
    bind: bsTooltip,
    update: bsTooltip,
    unbind(el) {
        $(el).tooltip('dispose')
    }
});

const store = new Vuex.Store({
    state: {
        url: 'https://www.freepoint.htl3r.com/api',
        loading: false,
        /*url: 'localhost:8000/api',*/
        user: {
            token: undefined,
            username: undefined,
            verified: false
        },
        company: {
            companyName: undefined,
            contactMail: undefined,
            conversionRate: undefined,
            domain: undefined,
            logo: undefined
        },
        points: 0,
        design: new Palette('#10cdb7', '#2c3e50', '#fafafa', '#ffffff'),
        coupons: [],
        couponsNew: [],
        couponsEdit: [],
        couponsDelete: []
    },
    getters: {
        showVerification(state) {
            return !state.user.verified && state.user.token !== undefined
        },
        getPoints(state) {
            return state.points
        },
        getDesign(state) {
            return state.design
        }
    },
    mutations: {
        setLoading(state, loading) {
            state.loading = loading
        },
        setVerification(state, verified) {
            state.user.verified = verified
        },
        setUser(state, user) {
            state.user = user
        },
        deleteUser(state) {
            console.debug("Deleting userdata from VueX")
            state.user = {
                token: undefined,
                username: undefined,
                verified: undefined
            }
        },
        setCompany(state, company) {
            state.company = company
        },
        setPoints(state, number) {
            state.points = number
        },
        setDesign(state, design) {
            state.design = design
        },
        setColorMain(state, color) {
            state.design.colorMain = color
        },
        setColorText(state, color) {
            state.design.colorText = color
        },
        setColorBackground(state, color) {
            state.design.colorBackground = color
        },
        setColorBanner(state, color) {
            state.design.colorBanner = color
        },
        setCoupons(state, coupons) {
            state.coupons = coupons
        },
        resetCouponNew(state) {
            state.couponsNew = []
        },
        resetCouponEdit(state) {
            state.couponsEdit = []
        },
        resetCouponDelete(state) {
            state.couponsDelete = []
        },
        resetCouponAll(state) {
            state.couponsNew = []
            state.couponsEdit = []
            state.couponsDelete = []
        },
        pushCouponsNew(state, coupon) {
            state.couponsNew.push(coupon)
        },
        pushCouponsEdit(state, coupon) {
            console.debug("pushCouponsEdit", coupon)
            state.couponsEdit.splice(state.couponsEdit.findIndex(x => x.id === coupon.id), 1)
            state.coupons.splice(state.coupons.findIndex(x => x.id === coupon.id), 1)
            state.couponsEdit.push(coupon)
        },
        pushCouponsDelete(state, coupon) {
            state.coupons.splice(state.coupons.findIndex(x => x.id === coupon.id), 1)
            state.couponsNew.splice(state.couponsNew.findIndex(x => x.id === coupon.id), 1)
            state.couponsEdit.splice(state.couponsEdit.findIndex(x => x.id === coupon.id), 1)
            state.couponsDelete.push(coupon)
        }
    }
})

router.beforeEach((to, from, next) => {
    store.commit("setLoading", false)
    if (store.state.user.token) {
        Vue.prototype.$http.post(store.state.url + '/checkLogin', {
            hash: store.state.user.token
        }).then(response => {
            if (response.data.valid) {
                if (!store.state.user.verified) {
                    if (response.data.verified) {
                        store.commit("setVerification", response.data.verified)
                        localStorage.setItem('user', JSON.stringify(store.state.user))
                        console.debug("User verificated")
                    } else console.debug("User needs to verify")
                }
            } else {
                throw new Error()
            }
        }).catch(error => {
            console.error(error)
            localStorage.removeItem('user')
            store.commit("deleteUser")
        })
    }
    next()
})

new Vue({
    router: router,
    store: store,
    render: h => h(App)
}).$mount('#app')