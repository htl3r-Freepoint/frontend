<template>
  <nav id="navbar" class="sticky-top">
    <div class="navbar-mobile container">
      <footer class="footer row justify-content-between">
        <router-link class="router-link icon-mobile" to="/menu">
          <i class="fas fa-home"></i>
        </router-link>

        <router-link class="router-link icon-mobile" to="/inventar">
          <i class="fas fa-shopping-cart"></i>
        </router-link>

        <router-link class="router-link icon-mobile" to="/scan">
          <i class="fas fa-qrcode"></i>
        </router-link>

        <router-link class="router-link icon-mobile" to="/user/settings/profile">
          <i class="fas fa-cog"></i>
        </router-link>

        <router-link class="router-link icon-mobile" to="/login">
          <i class="fas fa-user"></i>
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

          <router-link class="router-link icon" to="/menu">
            <i class="fas fa-home"></i>
          </router-link>

          <router-link class="router-link icon" to="/inventar">
            <i class="fas fa-shopping-cart"></i>
          </router-link>

          <router-link class="router-link icon" to="/scan">
            <i class="fas fa-qrcode"></i>
          </router-link>

          <router-link class="router-link icon" to="/user/settings/profile">
            <i class="fas fa-cog"></i>
          </router-link>

          <router-link class="router-link icon" to="/login">
            <i class="fas fa-user"></i>
          </router-link>
        </div>

      </header>
    </div>
  </nav>
</template>

<script>

export default {
  name: "Navigationsleiste",
  components: {}
}
</script>

<style scoped lang="scss">

.router-link {
  text-decoration: none;
  color: inherit;

}

.router-link-active {
  color: var(--store-primary);
}


.container{
  margin: 0 auto;
}


.icon {
  margin-left: 1em;
  font-size: 2.5vh;
}

.icon-mobile {
  margin: 10px;
  font-size: 3vh;
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