<template>
  <div class="card container">
    <div class="row">
      <h3 class="col-3 text-left settings-main-header">Einstellungen</h3>
      <h4 class="col settings-sub-header">{{ title }}</h4>
    </div>
    <div class="row">
      <div class="col-3 settings-links">
        <router-link class="router-link" to="/settings/user/profile">
          <div class="row settings-row">
            <div class="col-1"><i class="far fa-user-circle settings-icon"></i></div>
            <div class="col text-left">Profil bearbeiten</div>
          </div>
        </router-link>

        <router-link class="router-link" to="/settings/user/info">
          <div class="row settings-row">
            <div class="col-1"><i class="fas fa-info-circle settings-icon"></i></div>
            <div class="col text-left">Info</div>
          </div>
        </router-link>
        <router-link class="router-link" to="/settings/user/help">
          <div class="row settings-row">
            <div class="col-1"><i class="far fa-question-circle settings-icon"></i></div>
            <div class="col text-left">Hilfe</div>
          </div>
        </router-link>
        <router-link class="router-link" to="/settings/user/feedback">
          <div class="row settings-row">
            <div class="col-1"><i class="far fa-comment-dots settings-icon"></i></div>
            <div class="col text-left">Feedback</div>
          </div>
        </router-link>
      </div>
      <div class="col">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings",
  props: ['title']
}
</script>

<style scoped>

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
  .settings-main-header{
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