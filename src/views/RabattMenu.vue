<template>
  <div class="container">

    <div id="coupon-container" class="row justify-content-center">
      <coupon class="col-12 col-md-4 col-sm-6"
              title="Cheeseburger"
              text="Genieße den saftigen Cheeseburger mit Gurken, Salat und geschmolzenen Ementaler"
              percentage="15"
              value="25"></coupon>
      <coupon class="col-12 col-md-4  col-sm-6"
              title="Cheeseburger"
              text="Genieße den saftigen Cheeseburger mit Gurken, Salat und geschmolzenen Ementaler"
              percentage="0"
              value="30"></coupon>
      <coupon class="col-12 col-md-4  col-sm-6"
              title="Cheeseburger"
              text="Genieße den saftigen Cheeseburger mit Gurken, Salat und geschmolzenen Ementaler"
              percentage="0"
              value="30"></coupon>
      <coupon class="col-12 col-md-4  col-sm-6"
              title="Cheeseburger"
              text="Genieße den saftigen Cheeseburger mit Gurken, Salat und geschmolzenen Ementaler"
              percentage="15"
              value="25"></coupon>
      <coupon class="col-12 col-md-4  col-sm-6"
              title="Cheeseburger"
              text="Genieße den saftigen Cheeseburger mit Gurken, Salat und geschmolzenen Ementaler"
              percentage="0"
              value="30"></coupon>
      <coupon class="col-12 col-md-4  col-sm-6"
              title="Cheeseburger"
              text="Genieße den saftigen Cheeseburger mit Gurken, Salat und geschmolzenen Ementaler"
              percentage="0"
              value="30"></coupon>
    </div>


    <!-- Button trigger modal -->
    <button type="button" data-toggle="modal" data-target="#exampleModalCenter">
      <img class="icon" src="../assets/plus-circle.svg" width="25">
    </button>

    <form-new-coupon></form-new-coupon>


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


.container {
  margin-bottom: 60px;

}

</style>