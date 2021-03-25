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

    <button class="btn btn-primary" type="button" @click="changeUser">Speichern</button>

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
      <button class="btn btn-primary" type="button" @click="changePassword">Passwort Ändern</button>
    </form>

    <button type="button" class="btn btn-danger font-weight-bold mt-3" @click="modalDelete">Account Löschen</button>

    <transition name="fade" v-on:enter="enterSuccess">
      <div class="alert alert-success" v-if="success">
        Daten wurden gespeichert
      </div>
    </transition>

    <modal id="deleteConfirmation">
      <form class="d-flex flex-column">
        <fp-input label="Geben sie ihr Passwort zur Bestätiugung ein">
          <input class="form-control" type="password" v-model="userPassword">
        </fp-input>
        <button class="btn btn-danger" type="button" @click="deleteUser" :disabled="!userPassword">Löschen</button>
      </form>
    </modal>
  </div>
</template>

<script>
import FpInput from "@/components/Form Components/FpInput.vue";
import Modal from "@/components/Modal.vue"

import {library} from "@fortawesome/fontawesome-svg-core";
import {faAt, faKey, faUser} from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faAt, faKey)

export default {
  name: "Profile",
  components: {FpInput, Modal},
  data() {
    return {
      userPassword: '',
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      oldPassword: '',
      newPassword: '',
      success: false
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
    modalDelete() {
      this.$('#deleteConfirmation').modal()
    },
    changeUser() {
      this.$http.post(this.$store.state.url + "/changeUser", {
        token: this.$store.state.user.token,
        username: this.username,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email
      }).then(response => {
        response
        this.success = true
      })
    },
    changePassword() {
      this.$http.post(this.$store.state.url + "/changeUser", {
        token: this.$store.state.user.token,
        oldPassword: this.oldPassword,
        newPassword: this.newPassword
      }).then(response => {
        response
        this.success = true
      })
    },
    deleteUser(){
      this.$http.post(this.$store.state.url + "/deleteUser", {
        hash: this.$store.state.user.token,
        password: this.userPassword
      }).then(response => {
        console.debug(response)
        this.$('#deleteConfirmation').modal()
      })
    },
    enterSuccess() {
      setTimeout(() => {
        this.success = false;
      }, 3000);
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}

.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>