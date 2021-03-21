<template>
  <div>
    <qrcode-stream id="QRScanner" class="my-5" @decode="onDecode" @init="checkCamera"/>
    <transition name="fade" v-on:enter="enterError">
      <div class="alert alert-danger" v-if="error">
        {{ this.error }}
      </div>
    </transition>
    <transition name="fade" v-on:enter="enterSuccess">
      <div class="alert alert-success" v-if="success">
        Gutschein erfolgreich eingelöst
      </div>
    </transition>
  </div>
</template>

<script>
import {QrcodeStream} from 'vue-qrcode-reader'
import Axios from "axios";

export default {
  name: "QrCodeScannerView",
  components: {QrcodeStream},
  data() {
    return {
      regex: new RegExp("_?R\\d-AT\\d_(.+)_(.+)_(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2})_(\\d+,\\d{2})_(\\d+,\\d{2})_(\\d+,\\d{2})_(\\d+,\\d{2})_(\\d+,\\d{2})_(.+)={1,2}_(.+)=="),
      error: ''
    }
  },
  methods: {
    onDecode(result) {
      navigator.vibrate(100)
      this.postData(result)
    },
    postData(code) {
      if (this.regex.exec(code)) {
        console.debug(code)
        Axios.post(this.$store.state.url + '/addQrCode', {
          code: code,
          hash: this.$store.state.user.token
        }).then(result => {
          this.$store.commit('setPoints', result.data)
          this.success = true
        }).catch(function (error) {
          console.error(error)
        })
      } else {
        console.error("Qrcode is invalid")
      }
    },
    async checkCamera(promise) {
      try {
        await promise
      } catch (error) {
        this.error = true
        console.error(error)
      }
    },
    enterError() {
      setTimeout(() => {
        this.error = false;
      }, 3000);
    },
    enterSuccess() {
      setTimeout(() => {
        this.success = false;
      }, 3000);
    }
  }
}
</script>

<style scoped>

#QRScanner{
  max-width: 500px;
  margin: auto;
}

@media (max-width: 560px) {
  #QRScanner{
    max-width: 300px;
  }
}

.alert {
  width: fit-content;
  margin: auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}

.fade-enter, .fade-leave-to {
  opacity: 0
}

</style>