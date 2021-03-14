<template>
  <div>
    <div v-if="!this.$store.state.company.name" class="container-fluid mt-4">

      <div class="row justify-content-center text-left p-2" id="banner">
        <div class="col-md-5">
          <h1 class="heading">Erstellen Sie Ihre eigene Gutschein-App!</h1>
          <hr>
          <p class="heading-sub">Passen Sie mit FreePoint einfach und schnell Ihre eigene Gutschein-App an! Oder genießen Sie als Kunde alle Vorteile der Rabatte!</p>
        </div>
        <div class="col-md-6">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="@/assets/root_carousel/Unbenannt-1.png" alt="First slide">
              </div>
              <div class="carousel-item">
                <img src="@/assets/root_carousel/app_vorschau_hr.png" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img src="@/assets/root_carousel/app_vorschau_hr.png" alt="Third slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>

      <divider class="row"></divider>

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

      <divider class="row"></divider>

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
import Divider from "@/components/divider";

export default {
  name: "Root",
  components: {Divider, FormRegisterUser, FormLogin, RabattMenu}
}
</script>

<style scoped>
.carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%2300A982' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%2300A982' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
}

img{
  width: 100%;
}

footer{
  background-color: #00A982;
  color: white;
}

#forms{
  background-color: #00A982;
}


#faq{
  background-color: #FAFAFA;
}

svg {
  fill: #00A982;
}

#banner{
  background-color: #FAFAFA;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 4px solid #00A982;
}
</style>