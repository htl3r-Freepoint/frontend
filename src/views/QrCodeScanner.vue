<template>
  <div>
    <h1>Qr-Code Scanner</h1>

    <qrcode-stream @decode="onDecode" @init="checkCamera"></qrcode-stream>
    <div v-if="error">
      <qrcode-drop-zone @decode="onDecode"></qrcode-drop-zone>
      <qrcode-capture @decode="onDecode"></qrcode-capture>
    </div>
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
      url: 'http://freepoint.at',
      options: {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
      },
      error: ''
    }
  },
  methods: {

    onDecode(result) {
      if (this.regex.exec(result)) {
        Axios.post(this.url, {
          params: {
            data: result
          }
        }, this.headers)
      }else{
        console.error("Qrcode is invalid");
      }
    },
    async checkCamera(promise) {
      try {
        await promise
        console.log("Qrcode-Scanner loaded")
      } catch (error) {
        console.error(error);
        if (error.name === 'NotAllowedError') {
          this.error = "ERROR: you need to grant camera access permission"
        } else if (error.name === 'NotFoundError') {
          this.error = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: Stream API is not supported in this browser"
        }
        console.error(this.error)
      }
    }

  }

}
</script>

<style scoped>

</style>