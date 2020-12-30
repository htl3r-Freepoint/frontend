<template>
  <div class="container-fluid" style="min-height: 100vh">


    <div id="head" class="row">
      <div class="col-8"><img src="../assets/Unbenannt-1.svg" alt="logo" width="30%" height="auto"></div>
      <div class="col-4 m-auto" id="business">Flame</div>
    </div>

    <div class="row">
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

export default {
  name: "RabattMenu",
  components: {Coupon},
  data() {
    return {
      url: 'http://freepoint.at',
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


/*
tabbar
 */

</style>