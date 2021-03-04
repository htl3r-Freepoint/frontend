<template>
  <nav id="navbar" class="sticky-top">

    <!--Desktop-->
    <header id="nav-header" class="border justify-content-center">
      <div class="col-6 col-sm-3">
        <a href="/">
          <img src="../assets/icons/Schriftzug.svg" width="200">
        </a>
      </div>

      <div id="nav-points" class="col-6 col-sm-3 font-weight-bold text-nowrap">
        {{ this.$store.state.points }} FP
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
  padding: 0 2px 4px;
  border-bottom-right-radius: 90px;
  border-bottom-left-radius: 90px;
}

#nav-footer {
  display: none;
}

@media (max-width: 560px) {
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