<template>
  <div>
    <div class="card container mobile">
      <div class="row settings-header">
        <h3 class="col text-left">Einstellungen</h3>
      </div>
      <div class="row">
        <div class="col">
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
      </div>
    </div>

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