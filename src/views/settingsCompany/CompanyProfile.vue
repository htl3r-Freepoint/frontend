<template>
  <div>
    <settings-company title="Profil bearbeiten">
      <div slot="body">

        <form class="">

          <settings-group label="Logo" description="Mit dem Logo setzen Sie einen wichtigen Schritt in die Richtung, ihre App zu individualisieren.">
            <div slot="input" class="col-md-7">
              <input type="file" class="form-control-file">
            </div>
          </settings-group>

          <settings-group label="Firmenname" description="Ihr Firmenname ">
            <div slot="input" class="col-md-7">
              <input class="form-control">
            </div>
          </settings-group>

          <settings-group label="Benutzername" description="">
            <div slot="input" class="col-md-7">
              <input class="form-control">
            </div>
          </settings-group>

          <settings-group label="E-Mail-Adresse" description="Die E-Mail-Adresse Ihres Accounts wird nicht veröffentlicht.">
            <div slot="input" class="col-md-7">
              <input type="email" class="form-control">
            </div>
          </settings-group>

          <settings-group label="Altes Passwort" description="Falls Sie Ihr Passwort ändern möchten, geben Sie zuerst Ihr altes Passwort ein.">
            <div slot="input" class="col-md-7">
              <input type="password" class="form-control">
            </div>
          </settings-group>

          <settings-group label="Neues Passwort" description="Geben Sie Ihr neues Passwort ein.">
            <div slot="input" class="col-md-7">
              <input type="password" class="form-control">
            </div>
          </settings-group>

          <button type="submit" class="btn btn-primary">Ändern</button>


        </form>
      </div>
    </settings-company>
  </div>
</template>

<script>
import SettingsCompany from "@/components/SettingsCompany";
import SettingsGroup from "@/components/SettingsGroup";
export default {
name: "CompanyProfile",
  components: {SettingsGroup, SettingsCompany}
}
</script>

<style scoped>
.settings-group{
  padding-bottom: 1.5em;
}

.settings-label{
  font-weight: bold;
}

.settings-small{
  font-size: small;
  color: grey;
}
</style>