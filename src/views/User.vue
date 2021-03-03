<template>
  <submenu title="Einstellungen">

    <div slot="links">
      <router-link to="/user/profile">
        <font-awesome-icon icon="user-circle"/>
        <div>Profil bearbeiten</div>
      </router-link>
      <router-link to="/user/settings/info">
        <font-awesome-icon icon="info-circle"/>
        <div>Info</div>
      </router-link>
      <router-link to="/user/settings/help">
        <font-awesome-icon icon="question-circle"/>
        <div>Hilfe</div>
      </router-link>
      <router-link to="/user/settings/feedback">
        <font-awesome-icon icon="comment-dots"/>
        <div>Feedback</div>
      </router-link>
    </div>

    <router-view></router-view>

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

<style scoped>

</style>