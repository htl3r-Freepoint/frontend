<template>
  <div id="register-company" class="container">
    <div v-if="this.$store.state.user">
      <form-register-company v-if="this.$store.state.user.verified"/>
      <p v-else>Please verify your email Address</p>
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

</style>