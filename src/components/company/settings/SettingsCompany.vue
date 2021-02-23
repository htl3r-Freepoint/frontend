<template>
  <div class="card container everything">
    <div class="row">
      <h3 class="col-3 text-left settings-main-header">Einstellungen</h3>
    </div>
    <div class="row h-100">
      <div class="col-3 settings-links">
        <router-link class="router-link" to="/company/settings/profile">
          <div class="row settings-row">
            <div class="col-2"><i class="far fa-user-circle settings-icon"></i></div>
            <div class="col text-left">Profil bearbeiten</div>
          </div>
        </router-link>
        <router-link class="router-link" to="/company/settings/design">
          <div class="row settings-row">
            <div class="col-2"><i class="fas fa-palette settings-icon"></i></div>
            <div class="col text-left">Design</div>
          </div>
        </router-link>
        <router-link class="router-link" to="/company/settings/statistics">
          <div class="row settings-row">
            <div class="col-2"><i class="fas fa-chart-bar settings-icon"></i></div>
            <div class="col text-left">Kundenstatistiken</div>
          </div>
        </router-link>
        <router-link class="router-link" to="/company/settings/flyer">
          <div class="row settings-row">
            <div class="col-2"><i class="fas fa-book-open settings-icon"></i></div>
            <div class="col text-left">Flyer-Customizer</div>
          </div>
        </router-link>
        <router-link class="router-link" to="/company/settings/location">
          <div class="row settings-row">
            <div class="col-2"><i class="far fa-compass settings-icon"></i></div>
            <div class="col text-left">Standorte</div>
          </div>
        </router-link>
        <router-link class="router-link" to="/company/settings/staff">
          <div class="row settings-row">
            <div class="col-2"><i class="fas fa-user-friends settings-icon"></i></div>
            <div class="col text-left">Mitarbeiter</div>
          </div>
        </router-link>
        <router-link class="router-link" to="/company/settings/info">
          <div class="row settings-row">
            <div class="col-2"><i class="fas fa-info-circle settings-icon"></i></div>
            <div class="col text-left">Info</div>
          </div>
        </router-link>
      </div>
      <div class="col container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsCompany",
  props: ['title']
}
</script>

<style scoped>
.everything{
  height: 50em;
}


@media (max-width: 561px) {
  .settings-links {
    display: none;
  }
  .settings-main-header{
    display: none;
  }
}

.settings-icon {
  font-size: 1.5em;
}

.router-link {
  text-decoration: none;
  color: inherit;
}

.settings-row {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}

.settings-row:hover {
  background: lightgrey;
}

.router-link-active {
  font-weight: bold;
  color: var(--store-primary);
}


@media (max-width: 561px) {
  .settings-links {
    display: none;
  }

  .settings-main-header {
    display: none;
  }
}

.settings-links {
  background: #F1F1F1;
}

.settings-main-header {
  background: #F1F1F1;
  padding-top: 1em;
  padding-bottom: 0.5em;
  margin-bottom: 0px;
}

.settings-sub-header {
  background: white;
  padding-top: 1em;
  padding-bottom: 0.5em;
}
</style>