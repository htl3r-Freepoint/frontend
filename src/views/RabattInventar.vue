<template>
  <div class="container">
    <div id="coupon-container" class="row justify-content-center">
      <coupon v-for="(coupon, id) in coupons" :key="id"
              class="col-12 col-md-4 col-sm-6" data-toggle="modal" data-target="#CouponDetail"
              :coupon="coupon"
              :edit-rights="false"></coupon>
    </div>


  </div>
</template>

<script>
import Coupon from "@/components/Coupon";
import CouponDetail from "@/components/CouponDetail";
import Axios from "axios";

export default {
  name: "RabattInventar",
  // eslint-disable-next-line vue/no-unused-components
  components: {CouponDetail, Coupon},
  data() {
    return {
      coupons: [
        {
          id: 0,
          title: 'Hamburger',
          text: 'Genieße den saftigen Hamburger mit Gurken und Salat, um -20%',
          isPercent: true,
          price: 0.00,
          percentage: 20,
          value: 15
        },
        {
          id: 1,
          title: 'Cheeseburger',
          text: 'Genieße den saftigen Cheeseburger mit Gurken, Salat und geschmolzenem Ementaler, um -1€',
          isPercent: false,
          price: 1.00,
          percentage: 0,
          value: 25
        }
      ]
    }
  },
  methods: {
    getInventory() {
      Axios.get(this.$store.state.url + "inventar.json", {
        user: 1
      }).then(result => {
        this.coupons = result.data
      }).catch(function (error) {
        console.error(error)
      })
    }
  }
}
</script>

<style scoped>
.container {
  margin-bottom: 60px;
}

</style>