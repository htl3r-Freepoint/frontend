<template>

  <form class="col">
    <div class="form-group">
      <label for="inputLoginEmail" class="col-form-label">Enter Email:</label>
      <input type="email" class="col form-control" id="inputLoginEmail" v-model="this.email"
             placeholder="E-Mail..." required>
    </div>
    <div class="form-group">
      <label for="inputLoginPassword" class="col-form-label">Enter Password:</label>
      <input type="password" class="col form-control" id="inputLoginPassword" v-model="this.password"
             placeholder="Password...">
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="inputLoginRemember" v-model="this.remember">
      <label for="inputLoginRemember">Remember me</label>
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-primary" @click="this.login()">Login</button>
    </div>
    <router-link to="/resetPassword" class="col">Forgot Password</router-link>
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
      remember: false,
      url: 'http://freepoint.at/api/user.json',
      data: {
        params: {
          email: this.email,
          password: this.password
        }
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }
  },
  methods: {
    login() {
      if (this.email && this.password) {
        Axios.post(this.url, this.data, this.headers)
            .then()
            .catch(function (error) {
              if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                console.log(error.request);
              } else {
                console.log('Error', error.message);
              }
              console.log(error.config);
            })
      }
    }
  }
}
</script>

<style scoped>

</style>