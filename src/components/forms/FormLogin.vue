<template>
  <form>

    <register-input title="Email"><font-awesome-icon icon="at" slot="prepend"/>
      <input type="email" class="form-control" id="inputLoginEmail" v-model="email"
             placeholder="E-Mail-Adresse" required></register-input>
    <register-input title="Password">
      <font-awesome-icon icon="key" slot="prepend"/>
      <input type="password" class="form-control" v-model="password"
             placeholder="Passwort">
    </register-input>
    <div class="form-group form-check">
      <label>
      <input type="checkbox" class="form-check-input" v-model="remember">
      Remember me
      </label>
    </div>
    <button type="button" class="btn btn-primary" v-on:click="login()" :disabled="!email && !password">Anmelden</button>
  </form>
</template>

<script>
import RegisterInput from "@/components/Form Components/RegisterInput";

import {library} from "@fortawesome/fontawesome-svg-core";
import {faAt, faKey} from "@fortawesome/free-solid-svg-icons";


library.add(faAt, faKey)

export default {
  name: "FormLogin",
  components: {RegisterInput},
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
        this.$http.post(this.$store.state.url + '/loginUser', {
          email: this.email,
          password: this.password
        }).then(response => {
          console.debug("Saving user login")
          if (this.remember) {
            localStorage.setItem('user', JSON.stringify(response.data))
          } else {
            localStorage.removeItem('user')
          }
          sessionStorage.setItem('user', JSON.stringify(response.data))
          this.$store.commit('setUser', JSON.parse(sessionStorage.getItem('user')))
          console.debug("User:", this.$store.state.user)
          console.debug("Saving Complete. Moving User to old Path")
          window.history.length > 1 ? this.$router.go(-1) : this.$router.push({path: '/'})
        }).catch(error => {
          console.debug("Config:", error);
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