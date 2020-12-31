<template>
  <div class="container-fluid" style="min-height: 100%">

    <form-new-coupon></form-new-coupon>

    <div id="coupon-container" class="row gx my-4 mx-3">
      <coupon class="col-6"
              title="Cheeseburger"
              text="Genieße den saftigen Cheeseburger mit Gurken, Salat und geschmolzenen Ementaler"
              percentage="15"
              value="25"></coupon>
      <coupon class="col-6"
              title="Cheeseburger"
              text="Genieße den saftigen Cheeseburger mit Gurken, Salat und geschmolzenen Ementaler"
              percentage="0"
              value="30"></coupon>
    </div>

  </div>
</template>

<script>
import Axios from 'axios'
import Coupon from "@/components/Coupon";
import FormNewCoupon from "@/components/forms/FormNewCoupon";

export default {
  name: "RabattMenu",
  components: {FormNewCoupon, Coupon},
  data() {
    return {
      url: 'http://freepoint.at/api',
      user: '1',
      store: '1',
      options: {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
      },
      coupons: []
    }
  },
  methods: {
    getData() {
      Axios.get(this.url, {
        params: {
          user: this.user,
          store: this.store
        }
      }, this.headers)
          .then(r => this.coupons = r)
    }
  }
}
</script>

<style scoped>

.container-fluid {
  background: #B1D4E3;
}

#business {
  font-size: 30px;
  text-align: center;
}

#head {
  background: #7FA7C9;
  padding: 20px;
}



</style>