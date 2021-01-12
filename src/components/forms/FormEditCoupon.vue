<template>
  <form role="form">
    <div class="row">
      <div class="form-group col">
        <input type="text" class="form-control" placeholder="Titel" v-model="title"/>
      </div>
    </div>

    <div class="row">
      <div class="form-group col">
        <textarea class="form-control" placeholder="Beschreibung" v-model="text"/>
      </div>
    </div>

    <div class="row">
      <div class="form-group col">
        <input type="number" class="form-control" placeholder="Benötigte Punkte" v-model="value"/>
      </div>
    </div>

    <div class="row btn-toolbar">
      <div class="col btn-group">
        <label class="btn btn-primary font-weight-bold">
          <input type="radio" :value="false" v-model="isPercent" checked> Euro €
        </label>
        <label class="btn btn-primary font-weight-bold">
          <input type="radio" :value="true" v-model="isPercent"> Prozent %
        </label>
      </div>
    </div>


    <div class="row">
      <div v-if="isPercent" class="input-group col">
        <input type="range" min="0" max="100" class="col form-control px-0" v-model="percentage"/>
        <div class="input-group-append">
          <input type="number" min="0" max="100" class="input-group-text" v-model="percentage">
          <span class="input-group-text">%</span>
        </div>
      </div>
      <div v-else class="input-group col">
        <input type="number" class="col form-control" v-model="price"/>
        <div class="input-group-append">
          <span class="input-group-text">€</span>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-danger" data-dismiss="modal" @click="resetData">Abbrechen</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal">Speichern</button>
      </div>
    </div>
  </form>
</template>

<script>
import Axios from "axios";

export default {
  name: "FormEditCoupon",
  components: {},
  props: ['store', 'coupon'],
  data() {
    return {
      url: 'http://freepoint.at/api',
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
    postNewCoupon() {
      Axios.post(this.url + '/coupon.js', {
        params: {
          store: this.store,
          id: this.coupon.id,
          coupon: {
            isPercent: this.isPercent,
            title: this.title,
            text: this.text,
            price: this.price,
            percentage: this.percentage,
            value: this.value
          }
        }
      })
    },
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
</style>