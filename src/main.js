import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Axios from "axios";

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        url: 'https://freepoint.htl3r.com/api',
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
        Axios.post(this.$store.state.url + '/checkLogin', {
            hash: this.$store.state.token
        }).then(response => {
            if (!response.data.valid) this.$store.commit("setToken", '')
            else this.$store.commit("setVerfification", response.data.isVerified)
        }).catch(error => {
            console.error(error)
            this.$store.commit("setToken", '')
        })
    }
    next()
})

new Vue({
    router: router,
    store: store,
    render: h => h(App)
}).$mount('#app')