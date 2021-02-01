<template>
  <div>
    <settings-company title="Profil">
      <div slot="body">

        <form>
          <div class="form-group row input">
            <label class="col-md-3 label" for="beschreibung">Logo</label>
            <input type="file" class="form-control-file, col-md-7" id="beschreibung">
          </div>
          <div class="form-group row input">
            <label class="col-md-3 label" for="nameInput">Benutzername</label>
            <input class="form-control col-md-7 text-left" id="nameInput">
          </div>
          <div class="form-group row input">
            <label class="col-md-3 label" for="mailInput">E-Mail-Adresse</label>
            <input type="email" class="form-control col-md-7" id="mailInput">
          </div>
          <div class="form-group input">
            <div class="row">
              <label class="col-md-3 label" for="oldPasswordInput">Altes Passwort</label>
              <input type="password" class="form-control col-md-7" id="oldPasswordInput">
            </div>
            <div class="row">
              <label class="col-md-3 label" for="newPasswordInput">Neues Passwort</label>
              <input type="password" class="form-control col-md-7" id="newPasswordInput">
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Ändern</button>
        </form>
      </div>
    </settings-company>
  </div>
</template>

<script>
import SettingsCompany from "@/components/SettingsCompany";
export default {
name: "CompanyProfile",
  components: {SettingsCompany}
}
</script>

<style scoped>

</style>