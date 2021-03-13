<template>
  <div>
    <div v-if="!this.$store.state.company.name" class="container-fluid mt-4 root">

      <div class="row justify-content-center" id="banner">
        <div class="col-md-6">
          <h1 class="heading">Erstellen Sie Ihre eigene Gutschein-App!</h1>
          <hr>
          <p class="paragraph">Passen Sie mit FreePoint einfach und schnell Ihre eigene Gutschein-App an!
            Durch Scannen des QR-Codes auf der Rechnung können Kunden ganz leicht Punkte = FreePoints sammeln. Diese
            können dann gegen, von Ihnen definierten Rabatte eingelöst werden.</p>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path class="elementor-shape-fill" d="M761.9,40.6L643.1,24L333.9,93.8L0.1,1H0v99h1000V1"></path>
        </svg>
      </div>

      <div class="row p-5" id="forms">
        <div class="col-md-6">
          <h3>Anmelden</h3>
          <form-login class="shadow-lg p-3 bg-white rounded"></form-login>
        </div>
        <div class="col-md-6">
          <h3>Registrieren</h3>
          <form-register-user class="shadow-lg p-3 bg-white rounded"></form-register-user>
        </div>
      </div>
      <svg class="row" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path class="elementor-shape-fill" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path>
      </svg>


      <div class="row m-5" id="faq">
        blablabla FAQ
      </div>

      <svg class="row" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path class="elementor-shape-fill" d="M761.9,40.6L643.1,24L333.9,93.8L0.1,1H0v99h1000V1"></path>
      </svg>

      <footer class="row d-flex justify-content-around py-3">
        <div>Ein Projekt der HTL Rennweg.</div>
        <div>Copyright © 2021 Freepoint | Powered by Freepoint</div>
        <router-link  to="/imprint">
          Impressum
        </router-link>
      </footer>

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
footer{
  background-color: #10cdb7;
}

#forms{
  background-color: #10cdb7;
}


#faq{
  background-color: #FAFAFA;
}

svg {
  fill: #10cdb7;
}

#banner{
  background-color: #FAFAFA;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 4px solid #10cdb7;
}
</style>