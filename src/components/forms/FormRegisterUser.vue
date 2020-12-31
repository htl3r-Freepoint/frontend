<template>

  <form class="col">
    <div class="col form-group">
      <div class="row">
        <label for="inputRegisterEmail" class="col-3 col-form-label">E-Mail:</label>
        <input type="email" class="col form-control" id="inputRegisterEmail" v-model="this.email"
               placeholder="E-Mail..." required>
      </div>
      <div class="row">
        <div class="col-3"></div>
        <small id="emailHelp" class="col form-text text-muted">We will never share your email with anyone else.</small>
      </div>
    </div>
    <div class="col form-group">
      <div class="row">
        <label for="inputRegisterPassword" class="col-3 col-form-label">Password:</label>
        <input type="password" class="col form-control" id="inputRegisterPassword" v-model="this.password"
               placeholder="Password..." required>
      </div>
    </div>
    <div class="col form-group">
      <div class="row">
        <label for="inputRegisterPasswordConfirm" class="col-3 col-form-label"></label>
        <input type="password" class="col form-control" id="inputRegisterPasswordConfirm" v-model="this.passwordConfirm"
               placeholder="Confirm Password..." required>
      </div>
    </div>
    <div class="col form-group">
      <div class="row">
        <label for="inputRegisterUsername" class="col-3 col-form-label">Name:</label>
        <input type="text" class="col form-control" id="inputRegisterUsername" v-model="this.name"
               placeholder="Name..." required>
      </div>
    </div>
    <div class="col form-check">
      <div class="row">
        <div class="col-3"/>
        <div class="col">
          <input type="checkbox" class="form-check-input" id="inputRegisterTOS" v-model="this.TOS" required>
          <label for="inputRegisterTOS">By checking this, you hereby agree to our
            <router-link to="/terms-and-service">Terms and Services</router-link>
          </label>
        </div>
      </div>
    </div>
    <div class="col form-group">
      <div class="row">
        <div class="col-3"/>
        <div class="col">
          <button type="submit" class="btn btn-primary" @click="this.register()">Register</button>
        </div>
      </div>
    </div>
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
      TOS: false,
      url: 'http://freepoint.at/api/user.json',
      data: {
        params: {
          email: this.email,
          password: this.password,
          username: this.name
        }
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }
  },
  methods: {
    register() {
      if (this.email && this.password && this.password === this.passwordConfirm) {
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