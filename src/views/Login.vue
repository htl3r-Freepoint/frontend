<template>
  <div id="login" class="container">
    <form-login></form-login>
    <!--<form-register-user></form-register-user>-->
    <!--<form-register-company></form-register-company>-->
  </div>
</template>

<script>
import FormLogin from "@/components/forms/FormLogin";
import FormRegisterUser from "@/components/forms/FormRegisterUser";
import FormRegisterCompany from "@/components/forms/FormRegisterCompany";
export default {
name: "Login",
  // eslint-disable-next-line vue/no-unused-components
  components: {FormRegisterCompany, FormRegisterUser, FormLogin}
}
</script>

<style scoped>

</style>