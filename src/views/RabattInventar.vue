<template>
  <div class="container">
    <div id="coupon-container" class="row justify-content-center">
      <coupon class="col-12 col-md-4 col-sm-6" data-toggle="modal" data-target="#CouponDetail"
              title="Cheeseburger"
              text="Genieße den saftigen Cheeseburger mit Gurken, Salat und geschmolzenen Ementaler"
              percentage="15"
              value="25"></coupon>
      <coupon class="col-12 col-md-4  col-sm-6" data-toggle="modal" data-target="#CouponDetail"
              title="Cheeseburger"
              text="Genieße den saftigen Cheeseburger mit Gurken, Salat und geschmolzenen Ementaler"
              percentage="0"
              value="30"></coupon>
      <coupon class="col-12 col-md-4  col-sm-6" data-toggle="modal" data-target="#CouponDetail"
              title="Cheeseburger"
              text="Genieße den saftigen Cheeseburger mit Gurken, Salat und geschmolzenen Ementaler"
              percentage="0"
              value="30"></coupon>
      <coupon class="col-12 col-md-4  col-sm-6" data-toggle="modal" data-target="#CouponDetail"
              title="Cheeseburger"
              text="Genieße den saftigen Cheeseburger mit Gurken, Salat und geschmolzenen Ementaler"
              percentage="15"
              value="25"></coupon>
      <coupon class="col-12 col-md-4  col-sm-6" data-toggle="modal" data-target="#CouponDetail"
              title="Cheeseburger"
              text="Genieße den saftigen Cheeseburger mit Gurken, Salat und geschmolzenen Ementaler"
              percentage="0"
              value="30"></coupon>
      <coupon class="col-12 col-md-4  col-sm-6" data-toggle="modal" data-target="#CouponDetail"
              title="Cheeseburger"
              text="Genieße den saftigen Cheeseburger mit Gurken, Salat und geschmolzenen Ementaler"
              percentage="0"
              value="30"></coupon>
    </div>

    <coupon-detail></coupon-detail>
  </div>
</template>

<script>
import Coupon from "@/components/Coupon";
import CouponDetail from "@/components/CouponDetail";

export default {
  name: "RabattInventar",
  components: {CouponDetail, Coupon}
}
</script>

<style scoped>
.container {
  margin-bottom: 60px;
}

</style>