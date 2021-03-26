<template>
  <submenu title="Einstellungen">

    <nav slot="links">
      <router-link to="/user/profile">
        <font-awesome-icon icon="user-circle"/>
        <div>Profil bearbeiten</div>
      </router-link>
      <router-link to="/user/info">
        <font-awesome-icon icon="info-circle"/>
        <div>Info</div>
      </router-link>
    </nav>

    <router-view class="settings-view pb-5"></router-view>

  </submenu>
</template>

<script>
import Submenu from "@/components/Submenu";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faCommentDots, faInfoCircle, faQuestionCircle, faUserCircle} from "@fortawesome/free-solid-svg-icons";

library.add(faUserCircle, faInfoCircle, faQuestionCircle, faCommentDots)

export default {
  name: "UserSettings",
  components: {Submenu}
}
</script>

<style scoped lang="scss">
nav {
  div {
    padding-left: 1em;
  }
}

@media (min-width: 576px) {
  .settings-view {
    padding-left: 50px;
    padding-right: 50px;
  }
}

@media (max-width: 576px) {
  .settings-view {
    padding-top: 25px;
  }
}
</style>