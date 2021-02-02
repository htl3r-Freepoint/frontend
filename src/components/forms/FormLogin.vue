<template>
  <form class="col">
    <div class="input-group">
      <!--<label for="inputLoginEmail" class="col-form-label">Enter Email:</label>-->
      <div class="input-group-prepend">
        <span class="input-group-text">
          <i class="fas fa-user"></i>
        </span>
      </div>
      <input type="email" class="col form-control" id="inputLoginEmail" v-model="email"
             placeholder="E-Mail..." required>
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">
          <i class="fas fa-key"></i>
        </span>
      </div>
      <!--<label for="inputLoginPassword" class="col-form-label">Enter Password:</label>-->
      <input type="password" class="col form-control" id="inputLoginPassword" v-model="password"
             placeholder="Password...">
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="inputLoginRemember" v-model="remember">
      <label for="inputLoginRemember">Remember me</label>
    </div>
    <div class="form-group">
      <button type="button" class="btn btn-primary" @click="login()">Login</button>
    </div>
  </form>
</template>

<script>
import Axios from 'axios'

export default {
  name: "FormLogin",
  data() {
    return {
      email: "",
      password: "",
      remember: false
    }
  },
  methods: {
    login() {
      if (this.email && this.password) {
        Axios.post(this.$store.state.url + '/loginUser', {
          email: this.email,
          password: this.password
        }).then(response => {
          console.debug("Response:", response.data)
          console.debug("Saving user login")
          if (this.remember) {
            localStorage.setItem('user', JSON.stringify(response.data))
          } else {
            localStorage.setItem('user', JSON.stringify({}))
          }
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
      }
    }
  }
}
</script>

<style scoped>

</style>