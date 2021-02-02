<template>
  <div>
    <form>
      <div class="form-group row input">
        <label class="col-md-3 label" for="nameInput">Benutzername</label>
        <input class="form-control col-md-7 text-left" id="nameInput"
               v-model="username">
      </div>
      <div class="form-group row input">
        <label class="col-md-3 label" for="nameInput">Vorname</label>
        <input class="form-control col-md-7 text-left" id="firstNameInput"
               v-model="firstName">
      </div>
      <div class="form-group row input">
        <label class="col-md-3 label" for="nameInput">Nachname</label>
        <input class="form-control col-md-7 text-left" id="lastNameInput"
               v-model="lastName">
      </div>
      <div class="form-group row input">
        <label class="col-md-3 label" for="mailInput">E-Mail-Adresse</label>
        <input type="email" class="form-control col-md-7" id="mailInput"
               v-model="email">
      </div>
      <div class="form-group input">
        <div class="row">
          <label class="col-md-3 label" for="oldPasswordInput">Altes Passwort</label>
          <input type="password" class="form-control col-md-7" id="oldPasswordInput"
                 v-model="oldPassword">
        </div>
        <div class="row">
          <label class="col-md-3 label" for="newPasswordInput">Neues Passwort</label>
          <input type="password" class="form-control col-md-7" id="newPasswordInput"
                 v-model="newPassword">
        </div>
      </div>
      <button type="button" class="btn btn-primary"
              v-on:click="updateData">Speichern
      </button>
    </form>
  </div>

</template>

<script>
import Axios from "axios";

export default {
  name: "Profile",
  components: {},
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
    Axios.post(this.$store.state.url + "/user", {
      token: this.$store.state.token
    }).then(response => {
      console.debug("Response:", response.data)
      this.username = response.data.username
      this.email = response.data.email
      this.firstName = response.data.firstName
      this.lastName = response.data.lastName
    })
  },
  methods: {
    updateData() {
      Axios.post(this.$store.state.url + "/changeUser", {
        toke: this.$store.state.token,
        username: this.username,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        oldPassword: this.oldPassword,
        newPassword: this.newPassword
      })
    }
  }
}
</script>

<style scoped>
.input {
  margin-bottom: 2em;
}

@media (max-width: 768px) {
  .label {
    text-align: left;
  }
}
</style>