<template>
  <div class="container-fluid" style="min-height: 100%">

    <div class="container w-25">
      <form role="form">

        <div class="row">
          <div class="form-group col">
            <input type="text" class="form-control" placeholder="Name"/>
          </div>
        </div>

        <div class="row">
          <div class="form-group col">
            <textarea class="form-control" placeholder="Beschreibung"/>
          </div>
        </div>

        <div class="row">
          <div class="form-group col">
            <input type="number" class="form-control" placeholder="benötigte Punkte"/>
          </div>
        </div>

        <div class="row">
          <div class="form-group col">
            <label class="radio-inline">
              <input type="radio" name="optradio" checked>gratis
            </label>
            <label class="radio-inline">
              <input type="radio" name="optradio">%
            </label>
          </div>
        </div>

        

        <div class="">
          <div class="form-group row justify-content-around">
            <button type="submit" class="btn btn-primary">speichern</button>
            <button type="submit" class="btn btn-primary">abbrechen</button>
          </div>
        </div>
      </form>
    </div>


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