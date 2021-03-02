<template>
  <div>
    <form>
      <fp-input label="Username">
        <i slot="prepend" class="fas fa-user"/>
        <input type="text" class="form-control"
               v-model="username"
               placeholder="Username">
      </fp-input>
      <fp-input>
        <i slot="prepend" class="fas fa-at"/>
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
    <form>
      <div class="form-group">
        <fp-input>
          <i slot="prepend" class="fas fa-key"/>
          <input type="password" class="form-control"
                 v-model="oldPassword"
                 placeholder="Altes Passwort"
                 autocomplete="old-password">
        </fp-input>
        <fp-input>
          <i slot="prepend" class="fas fa-key"/>

        </fp-input>
      </div>
    </form>
  </div>
</template>

<script>
import Axios from "axios";
import FpInput from "../../components/Form Components/FpInput";

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
    Axios.get(this.$store.state.url + "/user", {
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

</style>