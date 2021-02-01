<template>
  <nav id="navbar" class="sticky-top">
    <div class="navbar-mobile container">
      <footer class="footer row justify-content-between">
        <router-link to="/menu">
          <img v-if="!homeActive" v-on:click="homeActive=true; plusActive=false; gearActive=false ; qrActive=false"
               class="icon-mobile" src="../assets/icons/house.svg" width="30">
          <img v-if="homeActive" class="icon-mobile" src="../assets/icons/house-fill.svg" width="30">
        </router-link>

        <div>
          <img class="icon-mobile" src="../assets/icons/plus-circle.svg" width="30" type="button" data-toggle="modal"
               data-target="#exampleModalCenter">
        </div>

        <router-link to="/scan">
          <img v-if="!qrActive" v-on:click="qrActive=true; plusActive=false; gearActive=false; homeActive=false"
               class="icon-mobile" src="../assets/icons/upc.svg" width="30">
          <img v-if="qrActive" class="icon-mobile" src="../assets/icons/upc-scan.svg" width="30">
        </router-link>

        <router-link to="/settings/user/profile">
          <img v-if="!gearActive" v-on:click="gearActive=true; plusActive=false; homeActive=false; qrActive=false"
               class="icon-mobile" src="../assets/icons/gear.svg" width="30">
          <img v-if="gearActive" class="icon-mobile" src="../assets/icons/gear-fill.svg" width="30">
        </router-link>

        <router-link to="/login" class="font-weight-bold">
          <i class="icon-mobile fas fa-user"></i>
        </router-link>

      </footer>
    </div>


    <div class="navbar border">
      <header id="header" class="container row">
        <div class="col-4">
          <a class="" href="/">
            <img src="../assets/icons/Schriftzug.svg" width="150">
          </a>
        </div>

        <div id="nav-points" class="col-4 font-weight-bold">
          <h4>{{ this.$store.state.points }}</h4>
        </div>

        <div id="icons-header" class="col-4">

          <router-link to="/menu">
            <img v-if="!homeActive" v-on:click="homeActive=true; gearActive=false; qrActive=false"
                 class="icon" src="../assets/icons/house.svg" width="25">
            <img v-if="homeActive" class="icon" src="../assets/icons/house-fill.svg" width="25">
          </router-link>

          <router-link to="/scan">
            <img v-if="!qrActive" v-on:click="qrActive=true; gearActive=false; homeActive=false"
                 class="icon" src="../assets/icons/upc.svg" width="25">
            <img v-if="qrActive" class="icon" src="../assets/icons/upc-scan.svg" width="25">
          </router-link>

          <router-link to="/settings/user/profile">
            <img v-if="!gearActive" v-on:click="gearActive=true; homeActive=false; qrActive=false"
                 class="icon" src="../assets/icons/gear.svg" width="25">
            <img v-if="gearActive" class="icon" src="../assets/icons/gear-fill.svg" width="25">
          </router-link>

          <router-link to="/login" class="font-weight-bold">
            <i class="icon fas fa-user"></i>
          </router-link>
        </div>

      </header>
    </div>
  </nav>
</template>

<script>

export default {
  name: "Navigationsleiste",
  components: {},
  data() {
    return {
      homeActive: false,
      qrActive: false,
      gearActive: false
    }
  }
}
</script>

<style scoped lang="scss">

.container{
  margin: 0 auto;
}

#navbar {
  a {
    color: var(--text-color);
    font-size: 2.5vh;
  }
}

.router-link-active {
  color: var(--store-primary);
}

.icon {
  margin-left: 20px;
}

.icon-mobile {
  margin: 10px;
}

.navbar {
  background: white;
  padding-top: 0;
}

#nav-points {
  background: var(--store-primary);
  color: white;
  padding: 2px;
  width: 100px;
  border-bottom-right-radius: 90px;
  border-bottom-left-radius: 90px;
  justify-content: center;
  margin-bottom: 0;
}

@media (max-width: 560px) {
  #icons-header {
    display: none;
  }

  #nav-points {
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