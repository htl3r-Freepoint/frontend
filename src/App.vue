<template>
  <div id="app">
    <navigationsleiste></navigationsleiste>
    <div v-if="this.$store.state.token && !this.$store.state.verification">
      Bitte verifizieren sie ihre Email Addresse.
      <a :href="sendVerificationEmail">Email erneut senden</a>
    </div>
    <router-view class="router-view"/>
  </div>
</template>

<script>
import Navigationsleiste from "@/components/Navigationsleiste";
import Axios from "axios";

export default {
  name: "App",
  components: {Navigationsleiste},
  created() {
    // eslint-disable-next-line no-constant-condition
    if (sessionStorage.getItem('user')) {
      this.$store.commit('setUser', JSON.parse(sessionStorage.getItem('user')))
    }
    document.querySelector(':root').style.setProperty(
        '--store-primary',
        this.$store.state.design.colorMain
    )
  },
  methods: {
    sendVerificationEmail() {
      Axios.post(this.$store.state.url + "/sendEmail", {
        hash: this.$store.state.user.token
      }).catch(error => console.error(error))
    }
  }
}
</script>

<style lang="scss">

:root {
  --store-primary: #10cdb7;
  --text-color: #2c3e50;
  --flyer-color: #aaa;
}

p {
  color: var(--text-color);
}

.primary-text {
  color: var(--store-primary);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #153E73;
  background: #FAFAFA;
  min-height: 100vh;
}

.router-view {

}

.btn{
  border-right: inherit;
  &.btn-primary {
    background: var(--store-primary) !important;
    border: none;
  }
  &:hover{
    border-radius: 10px;
    transition: .3s;
  }
  &:active{
    border-radius: 20px;
    transition: .3s;
  }
  &:focus{
    box-shadow: 0 0 0 0 !important;
  }
}

.container {
  margin: 16px auto;
}

</style>