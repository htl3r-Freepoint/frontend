<template><div class="card container">
  <div class="row settings-header">
    <div class="col-1 text-left">
      <router-link class="router-link" to="/settings/user">
        <i class="fas fa-arrow-left fa-2x"></i>
      </router-link>
    </div>
    <h3 class="col text-left">Feedback</h3>
  </div>
  <div class="row"></div>
</div>

</template>

<script>
export default {
name: "Feedback"
}
</script>

<style scoped>

.router-link{
  text-decoration: none; color: inherit;
}

.settings-header {
  margin-bottom: 1em;
}
</style>