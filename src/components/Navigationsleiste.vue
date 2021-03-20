<template>
  <nav id="navbar" class="sticky-top shadow-lg">

    <!--Desktop-->
    <header id="nav-header" class="justify-content-center py-2">
      <div class="col-6 col-sm-3">
        <a href="/">
          <img src="../assets/icons/Schriftzug.svg" height="30">
        </a>
      </div>

      <div class="col-6 col-sm-3">
        <div id="nav-points" class="font-weight-bold text-nowrap">
          {{ navNumber }}
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
import gsap from 'gsap'

import {library} from "@fortawesome/fontawesome-svg-core";
import {faReceipt} from "@fortawesome/free-solid-svg-icons";

library.add(faReceipt)

export default {
  name: "Navigationsleiste",
  components: {NavigationLinks},
  data() {
    return {
      tweenedNumber: 0
    }
  },
  computed: {
    navNumber() {
      return this.tweenedNumber.toFixed(0);
    }
  },
  watch: {
    '$store.state.points': function(newValue) {
      gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
    }
  }
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
  border-radius: 90px;
}

#nav-footer {
  display: none;
}

@media (max-width: 576px) {
  #icons-header {
    display: none;
  }

  #nav-points {

  }

  #nav-footer {
    display: block;
    padding-top: 0.3em;
    padding-bottom: 0.3em;
  }

}
</style>