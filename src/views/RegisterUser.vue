<template>
  <div id="register" class="container">
    <form-register-user/>
    <p class="col">
      Already a member?
      <router-link to="/login">Login</router-link>
      instead
    </p>
  </div>
</template>

<script>
import FormRegisterUser from "@/components/forms/FormRegisterUser";

export default {
  name: "RegisterUser",
  components: {FormRegisterUser}
}
</script>

<style scoped>

</style>