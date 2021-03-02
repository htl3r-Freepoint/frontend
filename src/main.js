import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

import Axios from "axios";
import $ from 'jquery'

Vue.use(Vuex)

Vue.config.productionTip = false

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
    unbind (el) {
        $(el).tooltip('dispose')
    }
});

const store = new Vuex.Store({
    state: {
        url: 'https://freepoint.htl3r.com/api',
        user: undefined,
        companyName: '[insertCompanyName]',
        token: '',
        verification: false,
        points: 0,
        design:{
            colorMain: "#10cdb7"
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        setVerfification(state, verified) {
            state.verification = verified
        },
        setUser(state, user){
            state.user = user
        },
        increment(state) {
            state.points++
        },
        add(state, number) {
            state.points += number
        },
        setPoints(state, number) {
            state.points = number
        },
        setColorMain(state, color){
            state.design.colorMain = color
        }
    }
})

router.beforeEach((to, from, next) => {

    if (store.state.token) {
        Axios.post(store.state.url + '/checkLogin', {
            hash: this.$store.state.token
        }).then(response => {
            if (!response.data.valid) store.commit("setToken", '')
            else store.commit("setVerfification", response.data.verified)
        }).catch(error => {
            console.error(error)
            store.commit("setToken", '')
        })
    }

    let subdir = window.location.host.split('.')[0]
    let domain = 'localhost'
    if (subdir !== domain) {
        store.state.companyName = subdir
    }
    next()
})

new Vue({
    router: router,
    store: store,
    render: h => h(App)
}).$mount('#app')