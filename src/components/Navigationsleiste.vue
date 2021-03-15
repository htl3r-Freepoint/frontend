<template>
  <nav id="navbar" class="sticky-top shadow-lg">

    <!--Desktop-->
    <header id="nav-header" class="border justify-content-center">
      <div class="col-6 col-sm-3">
        <a href="/">
          <img src="../assets/icons/Schriftzug.svg" height="30">
        </a>
      </div>

      <div class="col-6 col-sm-3">
        <div id="nav-points" class="font-weight-bold text-nowrap">
          {{ this.$store.state.points }}
          <font-awesome-icon icon="receipt"/>
        </div>
      </div>

      <navigation-links id="icons-header" class="col-sm-3"></navigation-links>
    </header>

    <!--Mobile-->
    <footer id="nav-footer">
      <navigation-links></navigation-links>
    </footer>

  </nav>
</template>

<script>
import NavigationLinks from "@/components/NavigationLinks";

import {library} from "@fortawesome/fontawesome-svg-core";
import {faReceipt} from "@fortawesome/free-solid-svg-icons";

library.add(faReceipt)

export default {
  name: "Navigationsleiste",
  components: {NavigationLinks}
}
</script>

<style scoped lang="scss">

nav {
  background: var(--banner-color);
  padding-top: 0;

  & header {
    display: flex;
    flex-wrap: wrap;
  }

  & footer {
    position: fixed;
    padding-left: 15px;
    padding-right: 15px;
    background: white;
    bottom: 0;
    width: 100%;
    border-top: 0.5px solid;
    border-color: #808080;
  }
}

#nav-points {
  background: var(--store-primary);
  color: white;
  font-size: 1.4em;
  height: 100%;
  border-bottom-right-radius: 90px;
  border-bottom-left-radius: 90px;
}

#nav-footer {
  display: none;
}

@media (max-width: 576px) {
  #icons-header {
    display: none;
  }

  #nav-points {
    border-top-left-radius: 90px;
    border-top-right-radius: 90px;
  }

  #nav-footer {
    display: block;
  }

}
</style>