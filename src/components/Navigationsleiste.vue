<template>
  <div>
    <div class="navbar-mobile container">
      <footer class="footer row justify-content-between">
        <router-link to="/menu">
          <img v-if="!homeActive" v-on:click="homeActive=true; plusActive=false; gearActive=false ; qrActive=false"
               class="icon-mobile" src="../assets/house.svg" width="30">
          <img v-if="homeActive" class="icon-mobile" src="../assets/house-fill.svg" width="30">
        </router-link>

        <div>
          <img class="icon-mobile" src="../assets/plus-circle.svg" width="30" type="button" data-toggle="modal"
               data-target="#exampleModalCenter">
        </div>

        <router-link to="/scan">
          <img v-if="!qrActive" v-on:click="qrActive=true; plusActive=false; gearActive=false; homeActive=false"
               class="icon-mobile" src="../assets/upc.svg" width="30">
          <img v-if="qrActive" class="icon-mobile" src="../assets/upc-scan.svg" width="30">
        </router-link>

        <router-link to="/flyer">
          <img v-if="!gearActive" v-on:click="gearActive=true; plusActive=false; homeActive=false; qrActive=false"
               class="icon-mobile" src="../assets/gear.svg" width="30">
          <img v-if="gearActive" class="icon-mobile" src="../assets/gear-fill.svg" width="30">
        </router-link>

      </footer>
    </div>


    <nav class="navbar fixed-top border">
      <div id="header" class="container">
        <div>
          <a class="" href="#">
            <img src="../assets/Schriftzug.svg" width="150">
          </a>
        </div>
        <div id="nav-points" class="font-weight-bold">
          <h4>25FP</h4>
        </div>
        <div id="icons-header">

          <router-link to="/menu">
            <img v-if="!homeActive" v-on:click="homeActive=true; gearActive=false; qrActive=false"
                 class="icon" src="../assets/house.svg" width="25">
            <img v-if="homeActive" class="icon" src="../assets/house-fill.svg" width="25">
          </router-link>

          <router-link to="/scan">
            <img v-if="!qrActive" v-on:click="qrActive=true; gearActive=false; homeActive=false"
                 class="icon" src="../assets/upc.svg" width="25">
            <img v-if="qrActive" class="icon" src="../assets/upc-scan.svg" width="25">
          </router-link>

          <router-link to="/flyer">
            <img v-if="!gearActive" v-on:click="gearActive=true; homeActive=false; qrActive=false"
                 class="icon" src="../assets/gear.svg" width="25">
            <img v-if="gearActive" class="icon" src="../assets/gear-fill.svg" width="25">
          </router-link>

        </div>
      </div>
    </nav>

    <form-new-coupon></form-new-coupon>

  </div>

</template>

<script>

import FormNewCoupon from "@/components/forms/FormNewCoupon";

export default {
  name: "Navigationsleiste",
  components: {FormNewCoupon},
  data() {
    return {
      homeActive: false,
      qrActive: false,
      gearActive: false
    }
  }
}
</script>

<style scoped>
* {
  z-index: 1;
  --primary: #10cdb7;
}

.icon {
  cursor: pointer;
  margin-left: 20px;
}

.icon-mobile {
  margin: 10px;
}

.navbar {
  background: white;
}

#nav-points{
  background: var(--primary);
  color: white;
  padding: 2px;
  width: 100px;
  border-bottom-right-radius: 90px;
  border-bottom-left-radius: 90px;
  justify-content: center;
  margin-bottom: 0px;
}

@media (max-width: 560px) {
  #icons-header {
    display: none;
  }

  #nav-points{
    border-top-left-radius: 90px;
  }

}

@media (min-width: 561px) {
  .navbar-mobile {
    display: none;
  }
}

.footer {
  position: fixed;
  padding-left: 15px;
  padding-right: 15px;
  background: white;
  bottom: 0;
  width: 100%;
  border-top: 0.5px solid;
  border-color: #808080;
}
</style>