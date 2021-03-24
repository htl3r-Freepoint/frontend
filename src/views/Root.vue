<template>
  <div>
    <div v-if="this.$store.state.company.companyName === undefined" class="container-fluid">

      <div class="row justify-content-center align-content-center text-left" id="banner">
        <div class="col-md-5">
          <h1 class="heading">Erstellen Sie Ihre eigene Gutschein-App!</h1>
          <hr>
          <p class="heading-sub">Passen Sie mit FreePoint einfach und schnell Ihre eigene Gutschein-App an! Oder
            genießen Sie als Kunde alle Vorteile der Rabatte!</p>
        </div>
        <div class="col-md-6">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="false">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/JxS_LZZdyJ4" frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen></iframe>
                </div>
              </div>
              <div class="carousel-item">
                <img src="@/assets/root_carousel/Geschafte.png" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img src="@/assets/root_carousel/Kunden.png" alt="Third slide">
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

      <div class="row p-5 justify-content-around" id="forms">
        <div class="col-md-4 mb-5">
          <div v-if="this.$store.state.user.token && this.$store.state.user.verified">
            <h1 class="mb-4 form-header">Ein Geschäft erstellen</h1>
            <form-register-company class="shadow-lg p-3 bg-white rounded"></form-register-company>
          </div>
          <div v-else>
            <h1 class="mb-4 form-header">Anmelden</h1>
            <form-login class="shadow-lg p-3 bg-white rounded"></form-login>
          </div>
        </div>
        <div class="col-md-4">
          <div v-if="this.$store.state.user.token">
            <h1 class="mb-4 form-header">Nach einem Geschäft suchen</h1>
            <div class="shadow-lg p-3 bg-white rounded">
              <register-input description="Hier können Sie nach den zahlreichen Geschäften suchen, die FreePoint nutzen.">
                <font-awesome-icon icon="search" slot="prepend"/>
                <input class="form-control" type="search" placeholder="Geschäft suchen" aria-label="Search">
              </register-input>
              <button type="button" class="btn btn-primary">Suchen</button>
            </div>
          </div>
          <div v-else>
            <h1 class="mb-4 form-header">Registrieren</h1>
            <form-register-user :overwrite-path-redirect="true" class="shadow-lg p-3 bg-white rounded"></form-register-user>
          </div>
        </div>
      </div>

      <svg class="row" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path class="elementor-shape-fill" d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path>
      </svg>


      <div class="row m-5" id="faq">
        <FaqElement class="col-md-3 col-sm-6">
          <template v-slot:icon>
            <font-awesome-icon icon="download" class="fa-5x faq-icon"/>
          </template>
          <template v-slot:headline>Einfacher geht´s nicht!</template>
          <template v-slot:text>Erstellen Sie einen Account.
            Definieren Sie Ihre Gutscheine und Rabatte.
            Fertig! Nun können Ihre Kunden Ihre App herunterladen.
          </template>
        </FaqElement>

        <FaqElement class="col-md-3 col-sm-6">
          <template v-slot:icon>
            <font-awesome-icon icon="lock" class="fa-5x faq-icon"/>
          </template>
          <template v-slot:headline>Sicherer und billiger!</template>
          <template v-slot:text>Aufwendige Stempelkarten sind Geschichte! Mit dieser App können Ihre Kunden ganz einfach
            den QR-Code auf deren Rechnung scannen und damit Punkte sammeln.
          </template>
        </FaqElement>

        <FaqElement class="col-md-3 col-sm-6">
          <template v-slot:icon>
            <font-awesome-icon icon="chart-pie" class="fa-5x faq-icon"/>
          </template>
          <template v-slot:headline>Kundenstatistiken!</template>
          <template v-slot:text>Freepoint informiert Sie über das Kaufverhalten Ihrer Kunden. Damit können Sie Ihre
            Marketingstrategie optimieren.
          </template>
        </FaqElement>

        <FaqElement class="col-md-3 col-sm-6">
          <template v-slot:icon>
            <font-awesome-icon icon="mobile" class="fa-5x faq-icon"/>
          </template>
          <template v-slot:headline>App herunterladen und los geht's!</template>
          <template v-slot:text>Holen Sie sich die App auf Ihr Handy und erstellen Sie Ihre ersten Angebote.</template>
        </FaqElement>

      </div>

      <divider class="row"></divider>

      <Footer class="row"></Footer>

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
import Footer from "@/components/Footer";
import FaqElement from "@/components/FaqElement";

import {library} from "@fortawesome/fontawesome-svg-core";
import {faChartPie, faMobile, faDownload, faLock, faSearch} from "@fortawesome/free-solid-svg-icons";
import FormRegisterCompany from "@/components/forms/FormRegisterCompany";
import RegisterInput from "@/components/Form Components/RegisterInput";

library.add(faChartPie, faMobile, faDownload, faLock, faSearch)

export default {
  name: "Root",
  components: {RegisterInput, FormRegisterCompany, FaqElement, Footer, Divider, FormRegisterUser, FormLogin, RabattMenu}
}
</script>

<style scoped lang="scss">
.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%2300A982' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
}

.carousel-control-prev {
  height: 50px;
  top: 45%;
}

.carousel-control-next {
  height: 50px;
  top: 45%;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%2300A982' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
}

.form-header {
  color: white;
}

img {
  width: 100%;
}

#forms {
  background-color: #00A982;
}

@media (max-width: 576px) {
  #forms{
    padding: 3em 0px !important;
  }
}


#faq {
  background-color: #FAFAFA;
}

svg {
  fill: #00A982;
}

#banner {
  background-color: #FAFAFA;
  height: 100vh;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 4px solid #00A982;
}
</style>