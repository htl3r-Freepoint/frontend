<template>
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
       aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Neues Coupon</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="container">
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
                <div class="col btn-group">
                  <label class="btn btn-primary">
                    <input type="radio" :value="true" v-model="selected" checked>gratis
                  </label>
                  <label class="btn btn-primary">
                    <input type="radio" :value="false" v-model="selected">%
                  </label>
                </div>
              </div>


              <div class="row">
                <div class="form-group col">
                  <input type="number" class="form-control" placeholder="Rabatt" :disabled="selected"/>
                </div>
              </div>

              <div class="row">
                <div class="col">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Abbrechen</button>
                  <button type="submit" class="btn btn-primary">Speichern</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "FormNewCoupon",
  props: ['store'],
  data() {
    return {
      url: 'http://freepoint.at/api',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      selected: true
    }
  },
  methods: {
    postNewCoupon() {
      Axios.post(this.url + '/rabatt.js', {
        params: {
          store: this.store,
          title: this.title,
          text: this.text,
          percentage: this.percentage,
          value: this.value
        }
      }, this.headers)
    }
  }
}
</script>

<style scoped>
</style>