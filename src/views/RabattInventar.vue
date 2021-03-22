<template>
  <div class="container">
    <div id="coupon-container" class="row justify-content-center">
      <coupon v-for="(coupon, id) in coupons" :key="id"
              class="col-sm-6 col-md-4 col-xl-3"
              :coupon="coupon">
        <font-awesome-icon slot="actionIcon" icon="qrcode"/>
        <div slot="modal">
          <vue-qr-code :value="coupon.code"></vue-qr-code>
        </div>
      </coupon>
    </div>

  </div>
</template>

<script>
import Coupon from "@/components/Coupon";
import VueQrCode from "vue-qrcode";

import {library} from "@fortawesome/fontawesome-svg-core";
import {faQrcode} from "@fortawesome/free-solid-svg-icons";

library.add(faQrcode)

export default {
  name: "RabattInventar",
  components: {Coupon, VueQrCode},
  data() {
    return {
      coupons: []
    }
  },
  created() {
    this.getInventory()
  },
  methods: {
    getInventory() {
      console.debug("Fetchin alls User Coupons")
      this.$http.post(this.$store.state.url + "/getUserCoupons", {
        hash: this.$store.state.user.token,
        companyName: this.$store.state.company.companyName
      }).then(result => {
        console.debug(result)
        this.coupons = result.data
      }).catch(function (error) {
        console.error(error)
      })
    }
  }
}
</script>

<style scoped>
* {
  --card-margin: 1rem
}

#coupon-container {
  padding: 0.2rem 1.2rem;
}

.container {
  margin-bottom: 60px;
}

</style>