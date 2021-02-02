<template>
    <settings-user title="Profil bearbeiten">
      <div slot="body">

        <form>
          <settings-group label="Benutzername" description="Ihr Firmenname ">
            <div slot="input" class="col-md-7">
              <input class="form-control" id="nameInput">
            </div>
          </settings-group>

          <settings-group label="E-Mail-Adresse" description="Ihr Firmenname ">
            <div slot="input" class="col-md-7">
              <input type="email" class="form-control">
            </div>
          </settings-group>

          <settings-group label="Altes Passwort" description="Ihr Firmenname ">
            <div slot="input" class="col-md-7">
              <input type="password" class="form-control">
            </div>
          </settings-group>

          <settings-group label="Neues Passwort" description="Ihr Firmenname ">
            <div slot="input" class="col-md-7">
              <input type="password" class="form-control">
            </div>
          </settings-group>
          <button type="button" class="btn btn-primary"
                  v-on:click="updateData">Speichern
          </button>
        </form>
        </div>
    </settings-user>


</template>

<script>
import Axios from "axios";
import SettingsGroup from "@/components/SettingsGroup";
import SettingsUser from "@/components/SettingsUser";

export default {
  name: "Profile",
  components: {SettingsGroup, SettingsUser},
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