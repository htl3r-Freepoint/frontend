<template>
  <div id="app">
    <navigationsleiste></navigationsleiste>
    <div v-if="this.$store.getters.showVerification">
      Bitte verifizieren sie ihre Email Addresse.
      <a href="" @click="sendVerificationEmail">Email erneut senden</a>
    </div>
    <router-view class="router-view"/>
  </div>
</template>

<script>
import Navigationsleiste from "@/components/Navigationsleiste";

export default {
  name: "App",
  components: {Navigationsleiste},
  created() {
    //Init Company
    let subdir = window.location.host.split('.')[0]
    let domainLocal = 'localhost:8080'
    let domain = "freepoint.at"
    if (subdir !== domainLocal && subdir !== domain) {
      this.$http.post(this.$store.state.url + "/getCompany", {
        companyName: subdir
      }).then(response => {
        console.debug(response)
        console.debug("Saving company information")
        this.$store.commit('setCompany', response.data.company)
        console.debug("Company saved")
        console.debug(this.$store.state.company)
        this.$store.state.subdomain = subdir
      })
    } else console.debug()

    document.querySelector(':root').style.setProperty(
        '--store-primary',
        this.$store.state.design.colorMain
    )

    //Init User
    console.debug("Loading login information from cookies")
    if (localStorage.getItem('user')) {
      this.$store.commit('setUser', JSON.parse(localStorage.getItem('user')))
      console.debug("Loading login information from cookies completed")
    }else{
      console.error('Loading login information from cookies abandoned.')
    }
  },
  methods: {
    sendVerificationEmail() {
      console.debug("Resending verification email")
      this.$http.post(this.$store.state.url + "/sendEmail", {
        hash: this.$store.state.user.token
      }).catch(error => console.error(error))
    }
  }
}
</script>

<style lang="scss">

:root {
  --store-primary: #10cdb7;
  --text-color: #153E73;
  --background-color: #FAFAFA;
  --banner-color: #ffffff;
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
  background: var(--background-color);
  min-height: 100vh;
}

.router-view {

}

.btn {
  border-right: inherit;

  &.btn-primary {
    background: var(--store-primary) !important;
    border: none;
    font-size: 1.2em;
    font-weight: bold;
  }

  &:hover {
    border-radius: 10px;
    transition: .3s;
  }

  &:active {
    border-radius: 20px;
    transition: .3s;
  }

  &:focus {
    box-shadow: 0 0 0 0 !important;
  }
}

.container {
  margin: 16px auto;
}

</style>