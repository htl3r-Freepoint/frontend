<template>
  <div id="navLinks" class="mx-2 row justify-content-between flex-nowrap">
    <router-link class="col router-link icon" to="/menu">
      <i class="fas fa-home"></i>
    </router-link>

    <router-link class="col router-link icon" to="/inventar">
      <i class="fas fa-shopping-cart"></i>
    </router-link>

    <router-link class="col router-link icon" to="/scan">
      <i class="fas fa-qrcode"></i>
    </router-link>

    <router-link class="col router-link icon" to="/user/settings/profile" v-if="this.$store.state.user">
      <i class="fas fa-cog"></i>
    </router-link>

    <router-link class="col router-link icon" to="/login" v-if="!this.$store.state.user">
      <i class="fas fa-sign-in-alt"></i>
    </router-link>
    <router-link v-else class="col router-link icon" to="/user/settings/profile">
      <i class="fas fa-user"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavigationLinks"
}
</script>

<style scoped>

#navLinks{
  height: 100%;
}

.router-link {
  text-decoration: none;
  color: inherit;
  height: 100%;
}

.router-link-active {
  color: var(--store-primary);
}

.icon {
  font-size: 3vh;
}

@media (max-width: 560px) {
  .icon{
    font-size: 3.5vh;
  }
}

</style>