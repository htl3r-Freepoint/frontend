<template>
  <nav>
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
</template>

<script>
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
  name: "links"
}
</script>

<style scoped lang="scss">

a {
  padding: .4em 0 .4em;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;

  & svg{
    font-size: 1.5em;
  }

  &:hover {
    background: lightgrey;
  }
}

.router-link-active {
  color: var(--store-primary);
}

</style>