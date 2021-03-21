<template>
  <div>
    <form>
      <fp-input label="Username">
        <font-awesome-icon slot="prepend" icon="user"/>
        <input type="text" class="form-control"
               v-model="username"
               placeholder="Username">
      </fp-input>
      <fp-input>
        <font-awesome-icon slot="prepend" icon="at"/>
        <input type="email" class="form-control"
               v-model="email"
               placeholder="Email">
      </fp-input>

      <fp-input label="Vorname">
        <input type="text" class="form-control"
               v-model="firstName"
               placeholder="Vorname">
      </fp-input>
      <fp-input label="Nachname">
        <input type="text" class="form-control"
               v-model="lastName"
               placeholder="Nachname">
      </fp-input>
    </form>

    <button class="btn btn-primary" @click="changeUser">Speichern</button>

    <form>
      <fp-input title="Altes Passwort">
        <font-awesome-icon slot="prepend" icon="key"/>
        <input type="password" class="form-control"
               v-model="oldPassword"
               placeholder="Altes Passwort"
               autocomplete="password">
      </fp-input>
      <fp-input title="Neues Passwort">
        <font-awesome-icon slot="prepend" icon="key"/>
        <input type="password" class="form-control"
               v-model="newPassword"
               placeholder="Neues Passwort"
               autocomplete="password">
      </fp-input>
    </form>
  </div>
</template>

<script>
import FpInput from "../../components/Form Components/FpInput";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faAt, faKey, faUser} from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faAt, faKey)

export default {
  name: "Profile",
  components: {FpInput},
  data() {
    return {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      oldPassword: '',
      newPassword: ''
    }
  },
  created() {
    this.$http.post(this.$store.state.url + "/getUser", {
      hash: this.$store.state.user.token
    }).then(response => {
      console.debug("Response:", response.data)
      this.username = response.data.username
      this.email = response.data.email
      this.firstName = response.data.firstName
      this.lastName = response.data.lastName
    })
  },
  methods: {
    changeUser() {
      this.$http.post(this.$store.state.url + "/changeUser", {
        token: this.$store.state.user.token,
        username: this.username,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email
      })
    },
    changePassword() {
      this.$http.post(this.$store.state.url + "/changeUser", {
        token: this.$store.state.user.token,
        oldPassword: this.oldPassword,
        newPassword: this.newPassword
      })
    }
  }
}
</script>

<style scoped>

</style>