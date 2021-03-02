<template>
          <div class="container">
            <div class="row">
              <h2 class="col">{{title}}</h2>
            </div>
            <div class="row">
              <h3 class="col font-weight-bold">{{
                isPercent ?
                    !(this.coupon.percentage > 0) || this.coupon.percentage >= 100 ?
                        'Gratis' : '-' + this.coupon.percentage + '%'
                    :
                    !(this.coupon.price > 0) || this.coupon.price >= 100 ?
                        'Gratis' : '-' + this.coupon.price + '€'
              }}</h3>
            </div>
            <div class="row">
              <div class="col">
                <i id="qr-code" class="fas fa-qrcode fa-10x rounded-circle"></i>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h6  @click="show=true" v-if="!show">mehr anzeigen</h6>
                <h6  v-if="show">_R1-AT2_haude-registrierkasse-67_9464_2017-01-01......</h6>
              </div>
            </div>
          </div>
</template>

<script>

export default {
  name: "CouponDetail",
  props: ['coupon'],
  data() {
    return {
      show: false,
      isPercent: true,
      title: "",
      text: "",
      price: 0,
      percentage: 0,
      value: 0
    }
  },
  created() {
    if (this.coupon) {
      this.resetData()
    }
  },
  methods: {
    resetData() {
      this.isPercent = this.coupon.isPercent
      this.title = this.coupon.title
      this.text = this.coupon.text
      this.price = this.coupon.price
      this.percentage = this.coupon.percentage
      this.value = this.coupon.value
    }
  }
}
</script>

<style scoped>
#qr-code {
  border-style: solid;
  border-width: 3px;
  width:150px;
  height:150px;
  padding: 20px;
}

.col{
  margin: 20px;
}
</style>