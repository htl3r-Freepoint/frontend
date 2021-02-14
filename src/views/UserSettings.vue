<template>
  <div>


    <nav class="navbar navbar-expand-lg navbar-light mobile">
      <h3 class="settings-header">Einstellungen</h3>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse show navbar-collapse" id="navbarSupportedContent">
        <router-link class="router-link" to="/user/settings/profile">
          <div class="row settings-row">
            <div class="col-1"><i class="far fa-user-circle settings-icon"></i></div>
            <div class="col text-left">Profil bearbeiten</div>
          </div>
        </router-link>
        <router-link class="router-link" to="/user/settings/info">
          <div class="row settings-row">
            <div class="col-1"><i class="fas fa-info-circle settings-icon"></i></div>
            <div class="col text-left">Info</div>
          </div>
        </router-link>
        <router-link class="router-link" to="/user/settings/help">
          <div class="row settings-row">
            <div class="col-1"><i class="far fa-question-circle settings-icon"></i></div>
            <div class="col text-left">Hilfe</div>
          </div>
        </router-link>
        <router-link class="router-link" to="/user/settings/feedback">
          <div class="row settings-row">
            <div class="col-1"><i class="far fa-comment-dots settings-icon"></i></div>
            <div class="col text-left">Feedback</div>
          </div>
        </router-link>
      </div>
    </nav>

    <settings-user>
      <router-view/>
    </settings-user>
  </div>

</template>

<script>
import SettingsUser from "@/components/SettingsUser";

export default {
  name: "UserSettings",
  components: {SettingsUser}
}
</script>

<style scoped>
@media (min-width: 560px) {
  .mobile{
    display: none;
  }
}


.router-link {
  text-decoration: none;
  color: inherit;
}

.router-link-active {
  font-weight: bold;
  color: var(--store-primary);
}

.settings-icon {
  font-size: 1.5em;
}

.settings-row {
  padding-top: 0.4em;
  padding-bottom: 0.4em;
  cursor: pointer;
}

.settings-row:active {
  background: lightgrey;
}

.settings-row:hover {
  background: lightgrey;
}

.settings-header {
  margin-bottom: 1em;
}


</style>