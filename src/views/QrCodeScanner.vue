<template>
  <div>
    <h1>Qr-Code Scanner</h1>
    <div v-if="error">
      <qrcode-drop-zone @decode="onDecode"></qrcode-drop-zone>
      <qrcode-capture @decode="onDecode"></qrcode-capture>
    </div>
    <qrcode-stream v-else @decode="onDecode" @init="checkCamera"></qrcode-stream>
    <button v-on:click="postData(test)">
      Test Points
    </button>
  </div>
</template>

<script>
import {QrcodeStream, QrcodeDropZone, QrcodeCapture} from 'vue-qrcode-reader'
import Axios from "axios";

export default {
  name: "QrCodeScannerView",
  // eslint-disable-next-line vue/no-unused-components
  components: {QrcodeStream, QrcodeDropZone, QrcodeCapture},
  data() {
    return {
      regex: "_?R\\d-AT\\d_(.+)_(.+)_(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2})_(\\d+,\\d{2})_(\\d+,\\d{2})_(\\d+,\\d{2})_(\\d+,\\d{2})_(\\d+,\\d{2})_(.+)={1,2}_(.+)==",
      error: '',
      test: '_R1-AT1_ZELJKOMUS01A_27914_2020-09-26T16:26:38_3,20_110,00_0,00_0,00_0,00_IXkPErtUR1A=_13e8e502_ctENeqtyCtU=_tQlbGAaQyGiuUR7EhIOgHJlf4s/K9ykoDyacSTutgCrLbhm4/sHHGhSqdaRAnjHl1121111Do1Oc5JVG/ftLhp5u+lTQg=='
    }
  },
  methods: {
    onDecode(result) {
      if (this.regex.exec(result)) {
        this.postData(result)
      } else {
        console.error("Qrcode is invalid");
      }
    },
    postData(code){
      Axios.post(this.$store.state.url + 'AddQrCode.json', {
        code: code,
        UserId: 2
      }).then(result => {
        console.debug("Points:", result.data)
        this.$store.commit('setPoints', result.data)
      }).catch(function (error) {
        console.error("Error",error)
        if (error.response) {
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
        } else if (error.request) {
          console.error(error.request);
        } else {
          console.error('Error:', error.message);
        }
        console.error(error);
      });
    },
    async checkCamera(promise) {
      try {
        await promise
        console.log("Qrcode-Scanner loaded")
      } catch (error) {
        this.error = error
        console.error("Error", error);

      }
    },
  }
}
</script>

<style scoped>

</style>