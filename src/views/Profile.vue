<template>
  <div class="card container">
    <div class="row settings-header">
      <div class="col-1 text-left">
        <router-link class="router-link" to="/settings/user">
          <i class="fas fa-arrow-left fa-2x"></i>
        </router-link>
      </div>
      <h3 class="col text-left">Profil bearbeiten</h3>
    </div>
    <form>
      <div class="form-group row input">
        <label class="col-md-2 label" for="nameInput">Benutzername</label>
        <input class="form-control col-md-7 text-left" id="nameInput">
      </div>
      <div class="form-group row input">
        <label class="col-md-2 label" for="mailInput">E-Mail-Adresse</label>
        <input type="email" class="form-control col-md-7" id="mailInput">
      </div>
      <div class="form-group input">
        <div class="row">
          <label class="col-md-2 label" for="oldPasswordInput">Altes Passwort</label>
          <input type="password" class="form-control col-md-7" id="oldPasswordInput">
        </div>
        <div class="row">
          <label class="col-md-2 label" for="newPasswordInput">Neues Passwort</label>
          <input type="password" class="form-control col-md-7" id="newPasswordInput">
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Ändern</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>
.input {
  margin-bottom: 2em;
}

.router-link {
  text-decoration: none;
  color: inherit;
}

.settings-header {
  margin-bottom: 1em;
}

@media (max-width: 768px) {
  .label{
    text-align: left;
  }
}
</style>