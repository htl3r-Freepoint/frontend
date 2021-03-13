<template>
  <div>
    <div v-if="!this.$store.state.company.name" class="container-fluid">
      <div class="row">
        <div class="col">
          <h2>Erstellen Sie Ihre eigene Gutschein-App!</h2>
          <p>Passen Sie mit FreePoint einfach und schnell Ihre eigene Gutschein-App an!
            Durch Scannen des QR-Codes auf der Rechnung können Kunden ganz leicht Punkte = FreePoints sammeln. Diese
            können dann gegen, von Ihnen definierten Rabatte eingelöst werden.</p>
        </div>
        <div class="col">

        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path class="elementor-shape-fill" d="M761.9,40.6L643.1,24L333.9,93.8L0.1,1H0v99h1000V1"></path>
        </svg>
      </div>
      <div class="row mb-5 p" id="forms">
        <div class="col">
          <h3>Anmelden</h3>
          <form-login class="shadow-lg p-3 bg-white rounded"></form-login>
        </div>
        <div class="col">
          <h3>Registrieren</h3>
          <form-register-user class="shadow-lg p-3 bg-white rounded"></form-register-user>
        </div>

      </div>
      <!--TODO Root page-->


    </div>

    <div v-else>
      <RabattMenu></RabattMenu>
    </div>
  </div>
</template>

<script>
import RabattMenu from "@/views/company/RabattMenu";
import FormLogin from "@/components/forms/FormLogin";
import FormRegisterUser from "@/components/forms/FormRegisterUser";

export default {
  name: "Root",
  components: {FormRegisterUser, FormLogin, RabattMenu}
}
</script>

<style scoped>
svg {
  fill: #10cdb7;
}

#forms {
  background: #10cdb7;
}
</style>