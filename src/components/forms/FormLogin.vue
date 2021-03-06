<template>
  <form>
    <fp-input title="Email">
      <font-awesome-icon icon="at" slot="prepend"/>
      <input type="email" class="form-control" id="inputLoginEmail" v-model="email"
             placeholder="z.B. name@gmail.com" required>
    </fp-input>
    <fp-input title="Password">
      <font-awesome-icon icon="key" slot="prepend"/>
      <input type="password" class="form-control" v-model="password"
             placeholder="Passwort">
    </fp-input>
    <div class="form-group form-check">
      <label>
      <input type="checkbox" class="form-check-input" v-model="remember">
      Remember me
      </label>
    </div>
    <button type="button" class="btn btn-primary" v-on:click="login()">Anmelden</button>
  </form>
</template>

<script>
import Axios from 'axios'
import FpInput from "@/components/Form Components/FpInput";

import {library} from "@fortawesome/fontawesome-svg-core";
import {faAt, faKey} from "@fortawesome/free-solid-svg-icons";

library.add(faAt, faKey)

export default {
  name: "FormLogin",
  components: {FpInput},
  data() {
    return {
      email: "",
      password: "",
      remember: false
    }
  },
  methods: {
    login() {
      if (this.email && this.password) {
        Axios.post(this.$store.state.url + '/loginUser', {
          email: this.email,
          password: this.password
        }).then(response => {
          console.debug("Response:", response.data)
          console.debug("Saving user login")
          if (this.remember) {
            localStorage.setItem('user', JSON.stringify(response.data))
          } else {
            localStorage.setItem('user', JSON.stringify({}))
          }
          sessionStorage.setItem('user', JSON.stringify(response.data))
          this.$store.commit('setUser', JSON.parse(sessionStorage.getItem('user')))
          console.debug("User:", this.$store.state.user)
          console.debug("Saving Complete. Moving User to new Path")
          window.history.length > 1 ? this.$router.go(-1) : this.$router.push({path: '/menu'})
        }).catch(error => {
          if (error.response) {
            console.debug("Data:", error.response.data);
            console.debug("Status:", error.response.status);
            console.debug("Headers:", error.response.headers);
          } else if (error.request) {
            console.debug("Request:", error.request);
          } else {
            console.debug("Error:", error.message);
          }
          console.debug("Config:", error.config);
        })
      }
    }
  }
}
</script>

<style scoped>
.btn-primary{
  width: 100%;
}
</style>