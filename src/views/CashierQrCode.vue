<template>
  <div>
    <qrcode-stream id="QRScanner" class="my-5" @decode="onDecode" @init="checkCamera"/>
    <transition name="fade" v-on:enter="enterError">
      <div class="alert alert-danger" v-if="error">
        {{ this.error }}
      </div>
    </transition>
    <modal id="onSuccess">
      <h1>Rabattcode eingelöst</h1>
    </modal>
  </div>
</template>

<script>
import {QrcodeStream} from 'vue-qrcode-reader'
import Modal from '@/components/Modal'

export default {
  name: "CashierQrCode",
  components: {QrcodeStream, Modal},
  data() {
    return {
      regex: new RegExp(""),
      error: undefined
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
        //TODO insert API URL
        this.$http.post(this.$store.state.url + '/useCoupon', {
          hash: this.$store.state.user.token,
          code: code
        }).then(result => {
          console.debug(result)
          this.coupon = result.data
          this.success = true
          this.$('#onSuccess').modal()
        }).catch(error => {
          console.error(error)
          this.error = error
        })
      } else {
        console.error("Qrcode is invalid")
      }
    },
    async checkCamera(promise) {
      try {
        await promise
      } catch (error) {
        this.error = error
        console.error(error)
      }
    },
    enterError() {
      setTimeout(() => {
        this.error = undefined;
      }, 3000);
    }
  }
}
</script>

<style scoped>

#QRScanner {
  max-width: 500px;
  margin: auto;
}

@media (max-width: 560px) {
  #QRScanner {
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