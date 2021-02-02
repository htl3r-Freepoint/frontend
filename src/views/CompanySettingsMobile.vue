<template>
  <div class="card container">
    <div class="row settings-header">
      <div class="col-1"></div>
      <h3 class="col text-left">Einstellungen</h3>
    </div>
    <div class="row">
      <div class="col">

        <router-link class="router-link" to="/settings/company/profile">
          <div class="row settings-row">
            <div class="col-1"><i class="far fa-user-circle settings-icon"></i></div>
            <div class="col text-left">Profil bearbeiten</div>
          </div>
        </router-link>

        <router-link class="router-link" to="/settings/company/design">
          <div class="row settings-row">
            <div class="col-1"><i class="fas fa-palette settings-icon"></i></div>
            <div class="col text-left">Design</div>
          </div>
        </router-link>

        <router-link class="router-link" to="/settings/company/statistics">
          <div class="row settings-row">
            <div class="col-1"><i class="fas fa-chart-bar settings-icon"></i></div>
            <div class="col text-left">Kundenstatistiken</div>
          </div>
        </router-link>

        <router-link class="router-link" to="/settings/company/flyer">
          <div class="row settings-row">
            <div class="col-1"><i class="fas fa-book-open settings-icon"></i></div>
            <div class="col text-left">Flyer-Customizer</div>
          </div>
        </router-link>

        <router-link class="router-link" to="/settings/company/location">
          <div class="row settings-row">
            <div class="col-1"><i class="far fa-compass settings-icon"></i></div>
            <div class="col text-left">Standorte</div>
          </div>
        </router-link>

        <router-link class="router-link" to="/settings/company/staff">
          <div class="row settings-row">
            <div class="col-1"><i class="fas fa-user-friends settings-icon"></i></div>
            <div class="col text-left">Mitarbeiter</div>
          </div>
        </router-link>

      </div>
    </div>

  </div>
</template>

<script>
export default {
name: "CompanySettings"
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