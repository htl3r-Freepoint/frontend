<template>
  <div class="row justify-content-between flex-nowrap">
    <router-link class="col router-link icon" to="/">
      <font-awesome-icon icon="home"/>
    </router-link>

    <router-link class="col router-link" to="/inventar" v-if="this.$store.state.user.token">
      <font-awesome-icon icon="cubes"/>
    </router-link>

    <router-link class="col router-link" to="/scan" v-if="this.$store.state.user.token">
      <font-awesome-icon icon="qrcode"/>
    </router-link>

    <router-link class="col router-link" to="/user/profile" v-if="this.$store.state.user.token">
      <font-awesome-icon icon="cog"/>
    </router-link>

    <router-link class="col router-link" to="/login" v-if="!this.$store.state.user.token">
      <font-awesome-icon icon="sign-in-alt"/>
    </router-link>
    <button class="col router-link red" v-on:click="logoutUser" v-else>
      <font-awesome-icon icon="sign-out-alt"/>
    </button>
    <!--    <router-link v-else class="col router-link icon" to="/user/settings/profile">
          <font-awesome-icon icon="user"/>
        </router-link>-->
  </div>
</template>

<script>
import {library} from "@fortawesome/fontawesome-svg-core";
import {faCog, faCubes, faHome, faQrcode, faSignInAlt, faSignOutAlt, faUser} from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faCubes, faQrcode, faCog, faSignInAlt, faUser, faSignOutAlt)

export default {
  name: "NavigationLinks",
  methods:{
    logoutUser(){
      localStorage.removeItem('user')
      sessionStorage.removeItem('user')
      this.$store.commit("deleteUser")
      this.$router.push("/")
    }
  }
}
</script>

<style scoped lang="scss">

a, .router-link, .router-link-active, button {
  border: none;
  background: none;
  text-decoration: none;
  color: var(--text-color);
  height: 100%;
  & svg{
    font-size: 1.7em;
  }
}

.router-link-active{
  color: var(--store-primary);
  &[href="#/"]:not(.router-link-exact-active){
    color: var(--text-color);
  }
}

@media (max-width: 576px) {
  a, .router-link, .router-link-active {
    & svg{
      font-size: 2em;
    }
  }
}

</style>