import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        url: 'https://freepoint.htl3r.com/api/',
        points: 0
    },
    mutations: {
        increment(state) {
            state.points++
        },
        add(state, number){
            state.points += number
        },
        setPoints(state, number){
            state.points = number
        }
    }
})

new Vue({
    router: Router,
    store: store,
    render: h => h(App)
}).$mount('#app')