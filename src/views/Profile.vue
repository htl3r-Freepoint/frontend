<template>
  <div>
    <settings title="Profil bearbeiten">
      <div slot="body">
        <form>
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
    </settings>
  </div>


</template>

<script>
import Settings from "@/components/Settings";

export default {
  name: "Profile",
  components: {Settings}
}
</script>

<style scoped>
.input {
  margin-bottom: 2em;
}

@media (max-width: 768px) {
  .label {
    text-align: left;
  }
}
</style>