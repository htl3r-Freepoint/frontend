<template>

  <div>

    <nav class="navbar navbar-expand-lg navbar-light mobile">
      <h3 class="settings-header">Einstellungen</h3>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse show navbar-collapse" id="navbarSupportedContent">
        <router-link class="router-link" to="/company/settings/profile">
          <div class="row settings-row">
            <div class="col-1"><i class="far fa-user-circle settings-icon"></i></div>
            <div class="col text-left">Profil bearbeiten</div>
          </div>
        </router-link>
        <router-link class="router-link" to="/company/settings/design">
          <div class="row settings-row">
            <div class="col-1"><i class="fas fa-palette settings-icon"></i></div>
            <div class="col text-left">Design</div>
          </div>
        </router-link>
        <router-link class="router-link" to="/company/settings/statistics">
          <div class="row settings-row">
            <div class="col-1"><i class="fas fa-chart-bar settings-icon"></i></div>
            <div class="col text-left">Kundenstatistiken</div>
          </div>
        </router-link>

        <router-link class="router-link" to="/company/settings/flyer">
          <div class="row settings-row">
            <div class="col-1"><i class="fas fa-book-open settings-icon"></i></div>
            <div class="col text-left">Flyer-Customizer</div>
          </div>
        </router-link>

        <router-link class="router-link" to="/company/settings/location">
          <div class="row settings-row">
            <div class="col-1"><i class="far fa-compass settings-icon"></i></div>
            <div class="col text-left">Standorte</div>
          </div>
        </router-link>

        <router-link class="router-link" to="/company/settings/staff">
          <div class="row settings-row">
            <div class="col-1"><i class="fas fa-user-friends settings-icon"></i></div>
            <div class="col text-left">Mitarbeiter</div>
          </div>
        </router-link>
      </div>
    </nav>

    <settings-company class="desktop">
    </settings-company>


  </div>
</template>

<script>
import SettingsCompany from "@/components/SettingsCompany";

export default {
  name: "CompanySettings",
  components: {SettingsCompany}
}
</script>

<style scoped>

@media (min-width: 560px) {
  .mobile {
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