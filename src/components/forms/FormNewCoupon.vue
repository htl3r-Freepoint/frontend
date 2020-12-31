<template>
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
      }
    }
  },
  methods: {
    postNewCoupon(){
      Axios.post(this.url + '/rabatt.js', {
        params:{
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