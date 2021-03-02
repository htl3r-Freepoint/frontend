<template>

  <div class="container">

    <div class="navbar navbar-expand-lg navbar-light mobile">
      <div class="row justify-content-between">
        <h3>Einstellungen</h3>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Links"
                aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <settings-links id="Links" class="collapse show navbar-collapse"/>
    </div>

    <div class="card">
      <h3 class="text-left settings-main-header desktop">Einstellungen</h3>
      <div class="row">
        <settings-links class="col-auto desktop"/>
        <div class="col container">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SettingsLinks from "@/components/company/settings/SettingsLinks"

export default {
  name: "Settings",
  components: {SettingsLinks}
}
</script>

<style scoped>
.mobile {
  display: none;
}

@media (max-width: 560px) {
  .mobile {
    display: block;
  }

  .desktop {
    display: none;
  }
}
</style>