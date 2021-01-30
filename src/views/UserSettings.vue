<template>
  <div class="card container">
    <div class="row settings-header">
      <div class="col-1"></div>
      <h3 class="col text-left">Einstellungen</h3>
    </div>
    <div class="row settings-row">
      <div class="col-1"><i class="far fa-user-circle settings-icon"></i></div>
      <div class="col text-left">Profil bearbeiten</div>
    </div>
    <div class="row settings-row">
      <div class="col-1"><i class="fas fa-unlock settings-icon"></i></div>
      <div class="col text-left">Passwort ändern</div>
    </div>
    <div class="row settings-row">
      <div class="col-1"><i class="far fa-question-circle settings-icon"></i></div>
      <div class="col text-left">Hilfe</div>
    </div>
    <div class="row settings-row">
      <div class="col-1"><i class="far fa-comment-dots settings-icon"></i></div>
      <div class="col text-left">Feedback</div>
    </div>
  </div>
</template>

<script>
export default {
name: "UserSettings"
}
</script>

<style scoped>
.settings-icon{
  font-size: 1.5em;
}

.settings-row{
  margin-bottom: 0.5em;
}

.settings-header{
  margin-bottom: 1em;
}



</style>