<template>
  <form>
    <fp-input title="Email">
      <font-awesome-icon icon="at" slot="prepend"/>
      <input type="email" class="form-control" id="inputLoginEmail" v-model="email"
             placeholder="z.B. name@gmail.com" required autocomplete="email">
    </fp-input>
    <fp-input title="Password">
      <font-awesome-icon icon="key" slot="prepend"/>
      <input type="password" class="form-control" v-model="password"
             placeholder="Passwort" required autocomplete="current-password">
    </fp-input>
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
import FpInput from "@/components/Form Components/FpInput";

import {library} from "@fortawesome/fontawesome-svg-core";
import {faAt, faKey} from "@fortawesome/free-solid-svg-icons";

library.add(faAt, faKey)

export default {
  name: "FormLogin",
  props: {
    overwritePathRedirect: Boolean
  },
  components: {FpInput},
  data() {
    return {
      email: "",
      password: "",
      remember: false,

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
          console.debug("Saving Complete", "Moving User to old Path")
          if (!this.overwritePathRedirect)window.history.length > 1 ? this.$router.go(-1) : this.$router.push({path: '/'})
        }).catch(error => {
          console.debug("Config:", error);
          this.password = undefined
        })
      } else {
        console.log("Login information incomplete")
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