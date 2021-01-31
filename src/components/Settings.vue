<template>
  <div class="card container">
    <div class="row settings-header">
      <div class="col-1 text-left">
        <router-link class="router-link" to="/settings/user">
          <i class="fas fa-arrow-left fa-2x"></i>
        </router-link>
      </div>
      <h3 class="col text-left">{{ title }}</h3>
    </div>
    <slot name="body"></slot>
  </div>
</template>

<script>
export default {
name: "Settings",
  props: ['title']
}
</script>

<style scoped>

.router-link {
  text-decoration: none;
  color: inherit;
}

.settings-header {
  margin-bottom: 1em;
}
</style>