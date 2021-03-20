<template>
  <form>
    <register-input>
      <font-awesome-icon icon="user" slot="prepend"/>
      <input type="text" class="form-control" id="inputRegisterName" v-model="companyName"
             placeholder="Geschäftsname" autocomplete="Geschäftsname" required>
    </register-input>

    <register-input description="Wir werden Ihre E-Mail-Adresse nicht weiterleiten.">
      <font-awesome-icon icon="at" slot="prepend"/>
      <input type="email" class="form-control" id="inputRegisterEmail" v-model="email"
             placeholder="E-Mail-Adresse" required>
    </register-input>

    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="inputRegisterTOS" v-model="TOS" required>
      <label for="inputRegisterTOS">Durch Ankreuzen dieser Option akzeptieren Sie unsere
        <router-link to="/terms-and-service">Nutzungsbedingungen.</router-link>
      </label>
    </div>

    <button type="button" class="btn btn-primary" @click="register()" :disabled="!email && !companyName && !TOS">
      Register
    </button>

  </form>
</template>

<script>

import RegisterInput from "@/components/Form Components/RegisterInput";

import {library} from "@fortawesome/fontawesome-svg-core";
import {faAt, faUser} from "@fortawesome/free-solid-svg-icons";

library.add(faAt, faUser)

export default {
  name: "FormRegisterCompany",
  components: {RegisterInput},
  data() {
    return {
      email: "",
      companyName: "",
      TOS: false
    }
  },
  methods: {
    register() {
      if (this.email && this.companyName && this.TOS) {
        this.$http.post(this.$store.state.url + "/registerCompany", {
          name: this.companyName,
          email: this.email,
          hash: this.$store.state.user.token
        }).then((response) => {
          console.debug(response)
          if (response.data.company) window.location.href = response.data.company.name + ".localhost:8080"
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
      } else console.log("Please fill all required fields in the form")
    }
  }
}
</script>

<style scoped>

</style>