<template>
  <div id="register-company" class="container">
    <div v-if="isLoggedIn">
      <form-register-company v-if="isVerified"/>
      <p v-else>Please verify your email Address</p>
    </div>
    <div v-else>
      <p>Please
        <router-link to="/login">Login</router-link>
        to your user account to create a company
      </p>
      <router-link class="btn btn-primary" to="/login">Login</router-link>
    </div>
  </div>
</template>

<script>
import FormRegisterCompany from "@/components/forms/FormRegisterCompany";
import Axios from "axios";

export default {
  name: "RegisterCompany",
  components: {FormRegisterCompany},
  data() {
    return {
      isLoggedIn: false,
      isVerified: false
    }
  },
  created() {
    console.debug("Token:", this.$store.state.token)
    Axios.post(this.$store.state.url + "/checkLogin", {
      hash: this.$store.state.token
    }).then(response => {
      console.debug(response.data)
      this.isLoggedIn = response.data.valid
      this.isVerified = response.data.verified
    })
  }
}
</script>

<style scoped>

</style>