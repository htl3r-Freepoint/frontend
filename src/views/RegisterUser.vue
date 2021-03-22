<template>
  <div id="register" class="container">

    <div class="row justify-content-center align-content-center">
      <div id="login-form" class="shadow-lg p-3 mb-5 bg-white rounded">
        <h2>Registrieren</h2>
        <form-register-user class="p-4"></form-register-user>
        <p>
          Sie haben bereits einen Account? Dann können Sie sich hier
          <router-link to="/login">anmelden.</router-link>
        </p>
      </div>
    </div>
    <div class="row justify-content-center" v-if="$store.state.loading">
      <Progressbar></Progressbar>
    </div>


  </div>
</template>

<script>
import FormRegisterUser from "@/components/forms/FormRegisterUser";
import Progressbar from "@/components/Progressbar";

export default {
  name: "RegisterUser",
  components: {Progressbar, FormRegisterUser}
}
</script>

<style scoped lang="scss">
#register {
  padding: 2em;
}
</style>