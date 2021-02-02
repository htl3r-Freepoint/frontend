<template>
  <form>
    <div class="form-group input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">
          <i class="fas fa-user"></i>
        </span>
      </div>
      <input type="text" class="form-control" id="inputRegisterUsername" v-model="name"
             placeholder="Username..." autocomplete="username" required>
    </div>
    <div class="form-group">
      <div class="input-group">
        <div class="input-group-prepend">
        <span class="input-group-text">
          <i class="fas fa-at"></i>
        </span>
        </div>
        <input type="email" class="form-control" id="inputRegisterEmail" v-model="email"
               placeholder="E-Mail..." required>
      </div>
      <small id="emailHelp" class="form-text text-muted">
        We will never share your email with anyone else.
      </small>
    </div>
    <div class="form-group">
      <div class="input-group">
        <div class="input-group-prepend">
        <span class="input-group-text">
          <i class="fas fa-key"></i>
        </span>
        </div>
        <input type="password" class="form-control" id="inputRegisterPassword" v-model="password"
               placeholder="Password" autocomplete="new-password" required>
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
        <span class="input-group-text">
          <i class="fas fa-key"></i>
        </span>
        </div>
        <input type="password" class="form-control" id="inputRegisterPasswordConfirm" v-model="passwordConfirm"
               placeholder="Confirm Password" autocomplete="new-password" required>
      </div>
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="inputRegisterTOS" v-model="TOS" required>
      <label for="inputRegisterTOS">
        By checking this, you hereby agree to our
        <router-link to="/terms-and-service">Terms and Services</router-link>
      </label>
    </div>
    <button type="submit" class="btn btn-primary"
            v-on:click="register()"
            :disabled="!TOS && !email && !password && !passwordConfirm">Register
    </button>
  </form>
</template>

<script>
import Axios from "axios";

export default {
  name: "FormRegisterUser",
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
          Axios.post(this.$store.state.url + '/registerUser', {
            email: this.email,
            password: this.password,
            username: this.name
          }).then(response => {
            console.debug("Response:", response.data)
            console.debug("Saving user login")
            localStorage.setItem('user', JSON.stringify({}))
            sessionStorage.setItem('user', JSON.stringify(response.data))
            this.$store.commit('setToken', JSON.parse(sessionStorage.getItem('user')).token)
            console.debug("Token:", this.$store.state.token)
            this.$router.push({path: 'menu'})
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

</style>