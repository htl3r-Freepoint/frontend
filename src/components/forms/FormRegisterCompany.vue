<template>
  <form class="col">
    <div class="col form-group">
      <input type="text" class="col form-control" id="inputRegisterName" v-model="companyName"
             placeholder="Company Name..." required>
    </div>
    <div class="col form-group">
      <input type="email" class="col form-control" id="inputRegisterEmail" v-model="email"
             placeholder="E-Mail..." required>
      <small id="emailHelp" class="col form-text text-muted">We will never share your email with anyone else.</small>
    </div>
    <div class="col form-check">
      <input type="checkbox" class="form-check-input" id="inputRegisterTOS" v-model="TOS" required>
      <label for="inputRegisterTOS">By checking this, you hereby agree to our
        <router-link to="/terms-and-service">Terms and Services</router-link>
      </label>
    </div>
    <div class="col form-group">
      <button type="button" class="btn btn-primary" @click="register()">Register</button>
    </div>
  </form>
</template>

<script>
import Axios from "axios";

export default {
  name: "FormRegisterCompany",
  data() {
    return {
      email: "",
      companyName: "",
      TOS: false
    }
  },
  methods: {
    register() {
      if (this.email && this.companyName) {
        Axios.post(this.$store.state.url + "/registerCompany", {
          name: this.companyName,
          email: this.email,
          hash: this.$store.state.token
        }).then((response) => {
          console.debug(response)

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
      }
    }
  }
}
</script>

<style scoped>

</style>