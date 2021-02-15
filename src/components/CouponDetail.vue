<template>
          <div class="container">
            <div class="row">
              <h5 class="text-left">Genieße den saftigen Cheeseburger mit Gurken, Salat und geschmolzenen
                Ementaler.</h5>
            </div>
            <div class="row">
              <h3 class="col font-weight-bold">gratis</h3>
            </div>
            <div class="row">
              <div class="col">
                <i id="qr-code" class="fas fa-qrcode fa-10x rounded-circle"></i>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h7  @click="show=true" v-if="!show">mehr anzeigen</h7>
                <h7  v-if="show">_R1-AT2_haude-registrierkasse-67_9464_2017-01-01......</h7>
              </div>
            </div>
          </div>
</template>

<script>
export default {
  name: "CouponDetail",
  data() {
    return {
      show: false
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