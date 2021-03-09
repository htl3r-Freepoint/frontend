<template>
  <div id="register" class="container">

    <div class="row">
      <div id="login-form" class="col-md shadow-lg p-3 mb-5 bg-white rounded">
        <h2>Registrieren</h2>
        <form-register-user class="p-4"></form-register-user>
        <p>
          Sie haben bereits einen Account? Dann können Sie sich hier
          <router-link to="/login">anmelden.</router-link>
        </p>
      </div>
      <div class="col-md text-left">
        <h2>Sie haben noch keinen Account?</h2>
        <p>Kein Problem! Erstellen Sie einfach ein neues Konto, das geht schnell und einfach!</p>
      </div>
    </div>






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
#register{
  padding: 2em;
}
</style>