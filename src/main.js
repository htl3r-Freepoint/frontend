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
        subdomain: undefined,
        points: 0,
        design: {
            colorMain: "#10cdb7",
            colorText: "#2c3e50",
            colorBackground: "#FAFAFA",
            colorBanner: "#ffffff",
        }
    },
    getters: {
        showVerification(state) {
            return !state.user.verified && state.user.token !== undefined
        },
        getPoints(state){
            return state.points
        }
    },
    mutations: {
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
        setCompany(state, company){
            state.company = company
        },
        incrementPoints(state) {
            state.points++
        },
        addPoints(state, number) {
            state.points += number
        },
        setPoints(state, number) {
            state.points = number
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
        }
    }
})

router.beforeEach((to, from, next) => {

    if (store.state.user.token) {
        Axios.post(store.state.url + '/checkLogin', {
            hash: store.state.user.token
        }).then(response => {
            let data = JSON.parse(response.data.substring('1'))
            if (data.valid) {
                if (!store.state.user.verified) {
                    if (data.verified) {
                        store.commit("setVerification", data.verified)
                        localStorage.setItem('user', JSON.stringify(store.state.user))
                        console.debug("User verificated")
                    }else console.debug("User needs to verify")
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