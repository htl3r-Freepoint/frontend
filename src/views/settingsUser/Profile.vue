<template>
    <settings-user title="Profil bearbeiten">
      <div slot="body">

        <form>
          <settings-group label="Benutzername" description="Ihr Firmenname ">
            <div slot="input" class="col-md-7">
              <input class="form-control" id="nameInput">
            </div>
          </settings-group>

          <settings-group label="E-Mail-Adresse" description="Ihr Firmenname ">
            <div slot="input" class="col-md-7">
              <input type="email" class="form-control">
            </div>
          </settings-group>

          <settings-group label="Altes Passwort" description="Ihr Firmenname ">
            <div slot="input" class="col-md-7">
              <input type="password" class="form-control">
            </div>
          </settings-group>

          <settings-group label="Neues Passwort" description="Ihr Firmenname ">
            <div slot="input" class="col-md-7">
              <input type="password" class="form-control">
            </div>
          </settings-group>
          <button type="submit" class="btn btn-primary">Ändern</button>
        </form>
        </div>
    </settings-user>


</template>

<script>
import SettingsUser from "@/components/SettingsUser";
import SettingsGroup from "@/components/SettingsGroup";

export default {
  name: "Profile",
  components: {SettingsUser, SettingsGroup}
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