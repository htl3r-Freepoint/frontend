<template>
  <div id="login" class="container">
    <form-login/>
    <p class="col">
      <router-link to="/resetPassword">Forgot Password</router-link>
    </p>
    <p class="col">
      Not yet a member?
      <router-link to="/register">Register</router-link>
      here
    </p>
  </div>
</template>

<script>
import FormLogin from "@/components/forms/FormLogin";

export default {
  name: "Login",
  components: {FormLogin}
}
</script>

<style scoped>

</style>