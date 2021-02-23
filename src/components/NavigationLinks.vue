<template>
  <div id="navLinks" class="mx-2 row justify-content-between flex-nowrap">
    <router-link class="col router-link icon" :to="'/company/' + this.$store.state.companyName + '/coupons'">
      <font-awesome-icon icon="home"/>
    </router-link>

    <router-link class="col router-link icon" to="/inventar">
      <font-awesome-icon icon="shopping-cart"/>
    </router-link>

    <router-link class="col router-link icon" to="/scan">
      <font-awesome-icon icon="qrcode"/>
    </router-link>

    <router-link class="col router-link icon" to="/user/settings/profile" v-if="this.$store.state.user">
      <font-awesome-icon icon="cog"/>
    </router-link>

    <router-link class="col router-link icon" to="/login" v-if="!this.$store.state.user">
      <font-awesome-icon icon="sign-in-alt"/>
    </router-link>
    <router-link v-else class="col router-link icon" to="/user/settings/profile">
      <font-awesome-icon icon="user"/>
    </router-link>
  </div>
</template>

<script>
import {library} from "@fortawesome/fontawesome-svg-core";
import {faHome, faShoppingCart, faQrcode, faCog, faSignInAlt, faUser} from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faShoppingCart, faQrcode, faCog, faSignInAlt, faUser)

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