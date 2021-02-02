<template>
  <div class="card container">
    <div class="row settings-header">
      <div class="col-1"></div>
      <h3 class="col text-left">Einstellungen</h3>
    </div>
    <div class="row">
      <div class="col">
        <router-link class="router-link" to="/settings/user/profile">
          <div class="row settings-row">
            <div class="col-1"><i class="far fa-user-circle settings-icon"></i></div>
            <div class="col text-left">Profil bearbeiten</div>
          </div>
        </router-link>

        <router-link class="router-link" to="/settings/user/info">
          <div class="row settings-row">
            <div class="col-1"><i class="fas fa-info-circle settings-icon"></i></div>
            <div class="col text-left">Info</div>
          </div>
        </router-link>
        <router-link class="router-link" to="/settings/user/help">
          <div class="row settings-row">
            <div class="col-1"><i class="far fa-question-circle settings-icon"></i></div>
            <div class="col text-left">Hilfe</div>
          </div>
        </router-link>
        <router-link class="router-link" to="/settings/user/feedback">
          <div class="row settings-row">
            <div class="col-1"><i class="far fa-comment-dots settings-icon"></i></div>
            <div class="col text-left">Feedback</div>
          </div>
        </router-link>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "UserSettingsMobile"
}
</script>

<style scoped>

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