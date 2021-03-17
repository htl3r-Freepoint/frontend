<template>
  <form>

    <register-input>
      <font-awesome-icon icon="user" slot="prepend"/>
      <input type="text" class="form-control" id="inputRegisterUsername" v-model="name"
             placeholder="Benutzername" autocomplete="username" required>
    </register-input>


    <register-input description="Wir werden Ihre E-Mail-Adresse nicht weiterleiten.">
      <font-awesome-icon icon="at" slot="prepend"/>
      <input type="email" class="form-control" id="inputRegisterEmail" v-model="email"
             placeholder="E-Mail-Adresse" required>
    </register-input>

      <register-input>
        <font-awesome-icon icon="key" slot="prepend"/>
        <input type="password" class="form-control" id="inputRegisterPassword" v-model="password"
               placeholder="Passwort" autocomplete="new-password" required>
      </register-input>

      <register-input>
        <font-awesome-icon icon="key" slot="prepend"/>
        <input type="password" class="form-control" id="inputRegisterPasswordConfirm" v-model="passwordConfirm"
               placeholder="Passwort bestätigen" autocomplete="new-password" required>
      </register-input>


    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="inputRegisterTOS" v-model="TOS" required>
      <label for="inputRegisterTOS">
        Durch Ankreuzen dieser Option akzeptieren Sie unsere
        <router-link to="/terms-and-service">Nutzungsbedingungen.</router-link>
      </label>
    </div>

    <button type="button" class="btn btn-primary"
            v-on:click="register()"
            :disabled="!TOS && !email && !password && !passwordConfirm">Registrieren
    </button>

  </form>
</template>

<script>
import RegisterInput from "@/components/Form Components/RegisterInput";

import {library} from "@fortawesome/fontawesome-svg-core";
import {faAt, faKey, faUser} from "@fortawesome/free-solid-svg-icons";


library.add(faAt, faKey, faUser)

export default {
  name: "FormRegisterUser",
  components: {RegisterInput},
  data() {
    return {
      email: "",
      password: "",
      passwordConfirm: "",
      name: "",
      TOS: false
    }
  },
  methods: {
    register() {
      if (this.email && this.password && this.passwordConfirm && this.TOS) {
        if (this.password === this.passwordConfirm) {
          this.$http.post(this.$store.state.url + '/registerUser', {
            email: this.email,
            password: this.password,
            username: this.name
          }).then(response => {
            console.debug("Response:", response.data)
            console.debug("Saving user login")
            localStorage.setItem('user', JSON.stringify({}))
            sessionStorage.setItem('user', JSON.stringify(response.data))
            this.$store.commit('setUser', JSON.parse(sessionStorage.getItem('user')).token)
            console.debug("Token:", this.$store.state.token)
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push({path: '/'})
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
        } else console.log("The repeated password must be equal")
      } else {
        console.log("Form incomplete", [this.email, this.password, this.passwordConfirm, this.TOS])
      }
    }
  }
}
</script>

<style scoped>
.btn-primary {
  width: 100%;
}
</style>