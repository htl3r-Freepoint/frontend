<template>
  <form>
    <div class="form-group input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">
          <i class="fas fa-user"></i>
        </span>
      </div>
      <input type="email" class="form-control" id="inputLoginEmail" v-model="email"
             placeholder="E-Mail" required>
    </div>
    <div class="form-group input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">
          <i class="fas fa-key"></i>
        </span>
      </div>
      <input type="password" class="form-control" id="inputLoginPassword" v-model="password"
             placeholder="Password">
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="inputLoginRemember" v-model="remember">
      <label for="inputLoginRemember">Remember me</label>
    </div>
    <button type="button" class="btn btn-primary" @click="login()">Login</button>
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
          this.$store.commit('setUser', JSON.parse(sessionStorage.getItem('user')))
          console.debug("User:", this.$store.state.user)
          console.debug("Saving Complete. Moving User to new Path")
          window.history.length > 1 ? this.$router.go(-1) : this.$router.push({path: '/menu'})
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