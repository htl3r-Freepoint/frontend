<template>
  <div>
    <div v-if="error">
      {{this.error}}
    </div>
    <qrcode-stream id="QRScanner" class="my-5" v-else @decode="onDecode" @init="checkCamera"/>
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
        Axios.post(this.$store.state.url + '/addQrCode.json', {
          code: code,
          hash: this.$store.state.user.token
        }).then(result => {
          this.$store.commit('setPoints', result.data)
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

</style>