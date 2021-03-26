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
import Vue from "vue";

export default {
  name: "App",
  components: {Navigationsleiste},
  created() {
    //Init Company

    const browserUrl = window.location.host.split('.')
    if (browserUrl.length > 1) {
      let subdir = browserUrl.shift()
      console.log("Company URL:", subdir)
      console.debug("Other URLs:",browserUrl)
      let forbiddenDomains = ['freepoint', 'www', 'localhost', 'localhost:8080']
      if (!forbiddenDomains.includes(subdir)) {
        this.loadCompanyInformation(subdir, browserUrl)
      } else if (!forbiddenDomains.includes(browserUrl[0])) {
        console.debug(browserUrl)
        this.sendBack(browserUrl)
      }
    }
  },
  methods: {
    sendVerificationEmail() {
      console.debug("Resending verification email")
      this.$http.post(this.$store.state.url + "/sendEmail", {
        hash: this.$store.state.user.token
      }).catch(error => console.error(error))
    },
    sendBack(urls) {
      window.location.replace(document.location.protocol + '//' + urls.join('.'))
    },
    // eslint-disable-next-line no-unused-vars
    loadCompanyInformation(subdir, urls) {
      console.debug("Loading company information")
      this.$http.post(this.$store.state.url + "/getCompany", {
        companyName: subdir
      }).then(response => {
        console.debug(response)
        console.debug("Saving company information")
        this.$store.commit('setCompany', response.data.company)
        this.loadUserData()
        this.loadColorPalette()
      }).catch(error => {
        console.error(error)
        this.sendBack(urls)
      })
    },
    loadUserData() {
      console.debug("Loading login information from cookies")
      if (localStorage.getItem('user')) {
        this.$store.commit('setUser', JSON.parse(localStorage.getItem('user')))
        console.debug("Loading login information completed")
        Vue.prototype.$http.post(this.$store.state.url + '/checkLogin', {
          hash: this.$store.state.user.token
        }).then(response => {
          if (response.data.valid) {
            if (!this.$store.state.user.verified) {
              if (response.data.verified) {
                this.$store.commit("setVerification", response.data.verified)
                localStorage.setItem('user', JSON.stringify(this.$store.state.user))
                console.debug("User verificated")
              } else console.debug("User needs to verify")
            }
          } else {
            throw new Error()
          }
        }).catch(error => {
          console.error(error)
          localStorage.removeItem('user')
          this.$store.commit("deleteUser")
        })
        this.getUserPoints()
      } else {
        console.debug('Loading login information abandoned')
      }
    },
    getUserPoints() {
      if (this.$store.state.user.token) {
        console.debug("Loading user points for company:", this.$store.state.company.companyName, this.$store.state.user.token)
        this.$http.post(this.$store.state.url + '/getPoints', {
          hash: this.$store.state.user.token,
          companyName: this.$store.state.company.companyName
        }).then(result => {
          this.$store.commit('setPoints', result.data)
        }).catch(error => {
          console.debug(error)
        })
      }
    },
    loadColorPalette(){
      let query = document.querySelector(':root').style
      let palette = this.$store.state.company.design.colorPalette
      query.setProperty('--store-primary', palette.main)
      query.setProperty('--text-color', palette.text)
      query.setProperty('--background-color', palette.background)
      query.setProperty('--banner-color', palette.banner)
    }
  }
}
</script>

<style lang="scss">


:root {
  --store-primary: #10cdb7;
  --text-color: #153E73;
  --background-color: #fafafa;
  --banner-color: #ffffff;
  --flyer-color: #aaa;
}

p {
  color: var(--text-color);
}

.primary-text {
  color: var(--store-primary);
}

html {
  background: var(--background-color);
}

#app {
  font-family: Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: var(--background-color);
  min-height: 100vh;
}

/**
*{
  transition: all 0.15s ease;
}
*/

.heading {
  font-size: 3em;
  color: #00A982;
}

.heading-sub {
  font-size: 1.6em;
  color: black;
}

@media (max-width: 576px) {
  .heading {
    font-size: 2.2em;
  }

  .heading-sub {
    font-size: 1.3em;
  }
}

.paragraph {
  font-size: 1.3em;
  color: black;
}

@media (max-width: 576px) {
  .router-view {
    margin-bottom: 2em;
  }
}

.btn {
  border-right: inherit;

  &.btn-primary {
    background-color: var(--store-primary) !important;
    border: solid var(--store-primary) !important;
    font-size: 1.2em;
    font-weight: bold;
  }

  &:hover {
    border-radius: 12px;
    transition: .2s;
  }

  &:active {
    border-radius: 25px;
    transition: .2s;
  }

  &:focus {
    box-shadow: 0 0 0 0 !important;
  }
}

.form-control {
  &:focus {
    box-shadow: none !important;
  }
}

.container {
  margin: 30px auto;
}

</style>