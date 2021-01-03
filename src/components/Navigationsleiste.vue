<template>
  <div>
    <div class="navbar-mobile container">
      <footer class="footer row justify-content-between">
        <img v-if="!homeActive" v-on:click="homeActive=true; plusActive=false; gearActive=false ; qrActive=false"
             class="icon" src="../assets/house.svg" width="30">
        <img v-if="homeActive" class="icon" src="../assets/house-fill.svg" width="30">
        <img v-if="!plusActive" v-on:click="plusActive=true; gearActive=false; homeActive=false; qrActive=false"
             class="icon" src="../assets/plus-circle.svg" width="30">
        <img v-if="plusActive" class="icon" src="../assets/plus-circle-fill.svg" width="30">
        <img v-if="!qrActive" v-on:click="qrActive=true; plusActive=false; gearActive=false; homeActive=false"
             class="icon" src="../assets/upc.svg" width="30">
        <img v-if="qrActive" class="icon" src="../assets/upc-scan.svg" width="30">
        <img v-if="!gearActive" v-on:click="gearActive=true; plusActive=false; homeActive=false; qrActive=false"
             class="icon" src="../assets/gear.svg" width="30">
        <img v-if="gearActive" class="icon" src="../assets/gear-fill.svg" width="30">
      </footer>
    </div>


    <nav class="navbar border">
      <div class="container">
        <div>
          <a class="" href="#">
            <img src="../assets/Schriftzug.svg" width="150">
          </a>
        </div>
        <div>
          <input class="form-control" type="search" placeholder="Search" aria-label="Search">
        </div>
        <div>
          <img v-if="!homeActive" v-on:click="homeActive=true; plusActive=false; gearActive=false ; qrActive=false"
               class="icon" src="../assets/house.svg" width="25">
          <img v-if="homeActive" class="icon" src="../assets/house-fill.svg" width="25">
          <img v-if="!plusActive" v-on:click="plusActive=true; gearActive=false; homeActive=false; qrActive=false"
               class="icon" src="../assets/plus-circle.svg" width="25">
          <img v-if="plusActive" class="icon" src="../assets/plus-circle-fill.svg" width="25">
          <img v-if="!qrActive" v-on:click="qrActive=true; plusActive=false; gearActive=false; homeActive=false"
               class="icon" src="../assets/upc.svg" width="25">
          <img v-if="qrActive" class="icon" src="../assets/upc-scan.svg" width="25">
          <img v-if="!gearActive" v-on:click="gearActive=true; plusActive=false; homeActive=false; qrActive=false"
               class="icon" src="../assets/gear.svg" width="25">
          <img v-if="gearActive" class="icon" src="../assets/gear-fill.svg" width="25">
        </div>
      </div>
    </nav>
  </div>

</template>

<script>

export default {
  name: "Navigationsleiste",
  data() {
    return {
      homeActive: false,
      qrActive: false,
      plusActive: false,
      gearActive: false
    }
  }
}
</script>

<style scoped>
.icon {
  cursor: pointer;
  margin-left: 20px;
}

.navbar {
  background: white;
}

@media (max-width: 560px) {
  .navbar {
    display: none;
  }
}

@media (max-width: 767px) {
  .form-control {
    display: none;
  }
}

@media (min-width: 560px) {
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