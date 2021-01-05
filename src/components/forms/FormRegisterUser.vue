<template>

  <form class="col">
    <div class="col form-group">
      <div class="row">
        <label for="inputRegisterEmail" class="col-3 col-form-label">E-Mail:</label>
        <input type="email" class="col form-control" id="inputRegisterEmail" v-model="email"
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
        <input type="password" class="col form-control" id="inputRegisterPassword" v-model="password"
               placeholder="Password..." autocomplete="new-password" required>
      </div>
    </div>
    <div class="col form-group">
      <div class="row">
        <label for="inputRegisterPasswordConfirm" class="col-3 col-form-label"></label>
        <input type="password" class="col form-control" id="inputRegisterPasswordConfirm" v-model="passwordConfirm"
               placeholder="Confirm Password..." autocomplete="new-password" required>
      </div>
    </div>
    <div class="col form-group">
      <div class="row">
        <label for="inputRegisterUsername" class="col-3 col-form-label">Username:</label>
        <input type="text" class="col form-control" id="inputRegisterUsername" v-model="name"
               placeholder="Username..." autocomplete="username" required>
      </div>
    </div>
    <div class="col form-check">
      <div class="row">
        <div class="col-3"/>
        <div class="col">
          <input type="checkbox" class="form-check-input" id="inputRegisterTOS" v-model="TOS" required>
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
          <button type="button" class="btn btn-primary" v-on:click="register()">Register</button>
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
      url: 'https://freepoint.htl3r.com/api/RegisterUser.json',
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
      if (this.email && this.password && this.passwordConfirm && this.TOS) {
        if (this.password === this.passwordConfirm) {
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
        }else console.log("The repeated password must be equal")
      } else {
        console.log("Form incomplete")
        console.log([this.email, this.password, this.passwordConfirm, this.TOS])
      }
    }
  }
}
</script>

<style scoped>

</style>