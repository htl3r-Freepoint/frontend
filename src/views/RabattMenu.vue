<template>
  <div class="container-fluid">

    <div id="coupon-container" class="row">
      <coupon class="col-12 col-md-4"
              title="Cheeseburger"
              text="Genieße den saftigen Cheeseburger mit Gurken, Salat und geschmolzenen Ementaler"
              percentage="15"
              value="25"></coupon>
      <coupon class="col-12 col-md-4"
              title="Cheeseburger"
              text="Genieße den saftigen Cheeseburger mit Gurken, Salat und geschmolzenen Ementaler"
              percentage="0"
              value="30"></coupon>
      <coupon class="col-12 col-md-4"
              title="Cheeseburger"
              text="Genieße den saftigen Cheeseburger mit Gurken, Salat und geschmolzenen Ementaler"
              percentage="0"
              value="30"></coupon>
      <coupon class="col-12 col-md-4"
              title="Cheeseburger"
              text="Genieße den saftigen Cheeseburger mit Gurken, Salat und geschmolzenen Ementaler"
              percentage="15"
              value="25"></coupon>
      <coupon class="col-12 col-md-4"
              title="Cheeseburger"
              text="Genieße den saftigen Cheeseburger mit Gurken, Salat und geschmolzenen Ementaler"
              percentage="0"
              value="30"></coupon>
      <coupon class="col-12 col-md-4"
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

export default {
  name: "RabattMenu",
  components: {Coupon},
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
  background: #FAFAFA;
}

</style>