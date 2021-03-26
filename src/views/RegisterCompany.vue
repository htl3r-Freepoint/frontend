<template>
  <div id="register-company" class="container">

    <div  v-if="this.$store.state.user" class="row justify-content-center align-content-center">
      <div id="login-form" class="shadow-lg p-3 mb-5 bg-white rounded">
        <h2>Als Geschäft registrieren</h2>
        <form-register-company class="p-4" v-if="this.$store.state.user.verified"></form-register-company>
        <p v-else>Please verify your email Address</p>
      </div>
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

export default {
  name: "RegisterCompany",
  components: {FormRegisterCompany},
}
</script>

<style scoped>
#register-company{
  padding: 2em;
}
</style>