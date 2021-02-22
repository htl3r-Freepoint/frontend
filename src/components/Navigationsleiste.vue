<template>
  <nav id="navbar" class="sticky-top">

    <!--Desktop-->
    <div class="navbar border">
      <header id="header" class="container row">
        <div class="col">
          <a href="/">
            <img src="../assets/icons/Schriftzug.svg" width="150">
          </a>
        </div>

        <div id="nav-points" class="mx-2 col font-weight-bold">
          {{ this.$store.state.points }} FP
        </div>

        <navigation-links id="icons-header" class="col"></navigation-links>
      </header>
    </div>

    <!--Mobile-->
    <div id="navbar-mobile" class="">
      <footer class="footer container">
        <navigation-links></navigation-links>
      </footer>
    </div>

  </nav>
</template>

<script>

import NavigationLinks from "@/components/NavigationLinks";

export default {
  name: "Navigationsleiste",
  components: {NavigationLinks}
}
</script>

<style scoped lang="scss">


.container {
  margin: 0 auto;
}

.navbar {
  background: white;
  padding-top: 0;
}

#nav-points {
  background: var(--store-primary);
  color: white;
  font-size: 1.4em;
  padding: 2px;
  border-bottom-right-radius: 90px;
  border-bottom-left-radius: 90px;
}

@media (max-width: 560px) {
  #icons-header {
    display: none;
  }

  #nav-points {
    border-top-left-radius: 90px;
    border-top-right-radius: 90px;
  }

}

@media (min-width: 561px) {
  #navbar-mobile {
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