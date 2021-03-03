<template>
  <submenu>

    <nav slot="links">
      <router-link to="/company/settings/profile">
        <font-awesome-icon icon="user-circle"/>
        <div class="text-left">Profil bearbeiten</div>
      </router-link>
      <router-link to="/company/settings/design">
        <font-awesome-icon icon="palette"/>
        <div class="text-left">Design</div>
      </router-link>
      <router-link to="/company/settings/statistics">
        <font-awesome-icon icon="chart-bar"/>
        <div class="text-left">Kundenstatistiken</div>
      </router-link>
      <router-link to="/company/settings/flyer">
        <font-awesome-icon icon="book-open"/>
        <div class="text-left">Flyer-Customizer</div>
      </router-link>
      <router-link to="/company/settings/location">
        <font-awesome-icon icon="compass"/>
        <div class="text-left">Standorte</div>
      </router-link>
      <router-link to="/company/settings/staff">
        <font-awesome-icon icon="user-friends"/>
        <div class="text-left">Mitarbeiter</div>
      </router-link>
      <router-link to="/company/settings/info">
        <font-awesome-icon icon="info"/>
        <div class="text-left">Info</div>
      </router-link>
    </nav>

    <router-view></router-view>

  </submenu>
</template>

<script>
import Submenu from "@/components/Submenu";
import {library} from "@fortawesome/fontawesome-svg-core";
import {
  faBookOpen,
  faChartBar,
  faCompass,
  faInfo,
  faPalette,
  faUserCircle,
  faUserFriends
} from "@fortawesome/free-solid-svg-icons";

library.add(faInfo, faUserFriends, faCompass, faBookOpen, faChartBar, faPalette, faUserCircle)

export default {
  name: "Settings",
  components: {Submenu}
}
</script>

<style scoped>

</style>