<template>
  <form role="form">
    <div class="row row-input">
      <div class="form-group col">
        <input type="text" class="form-control" placeholder="Titel" v-model="title" required/>
      </div>
    </div>

    <div class="row row-input">
      <div class="form-group col">
        <textarea class="form-control" placeholder="Beschreibung" v-model="text" required/>
      </div>
    </div>

    <div class="row">
      <div class="form-group col">
        <input type="number" class="form-control" placeholder="Benötigte Punkte" v-model="value" required/>
      </div>
    </div>

    <div class="row row-input btn-toolbar">
      <div class="col btn-group">
        <label class="btn btn-primary font-weight-bold">
          <input type="radio" :value="false" v-model="isPercent"> Euro €
        </label>
        <label class="btn btn-primary font-weight-bold">
          <input type="radio" :value="true" v-model="isPercent"> Prozent %
        </label>
      </div>
    </div>


    <div class="row row-input">
      <div v-if="isPercent" class="input-group col">
        <input type="range" min="0" max="100" class="col form-control px-0" v-model="percentage"/>
        <div class="input-group-append">
          <input type="number" min="0" max="100" class="input-group-text" v-model="percentage">
          <span class="input-group-text">%</span>
        </div>
      </div>
      <div v-else class="input-group col">
        <input type="number" class="col form-control" v-model="price" placeholder="Preis"/>
        <div class="input-group-append">
          <span class="input-group-text">€</span>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row control-buttons justify-content-between">
        <button type="button" class="col-5 btn btn-danger" data-dismiss="modal" @click="resetData">Abbrechen</button>
        <button type="button" class="col-5 btn btn-primary" data-dismiss="modal">Speichern</button>
      </div>
    </div>

  </form>
</template>

<script>
import Axios from "axios";

export default {
  name: "FormNewCoupon",
  props: ['store'],
  data() {
    return {
      url: 'http://freepoint.at/api',
      isPercent: true,
      title: "",
      text: "",
      price: 0,
      percentage: 0,
      value: undefined
    }
  },
  methods: {
    postNewCoupon() {
      Axios.post(this.url + '/coupon.js', {
        params: {
          store: this.store,
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
      this.isPercent = true;
      this.title = ""
      this.text = ""
      this.price = 0
      this.percentage = 0
      this.value = 0
    }
  }
}
</script>

<style scoped>

.row-input {
  padding-bottom: 0.5em;
}

.btn-toolbar{
  padding-bottom: 1em;
}

.form-control {
  border-radius: 1rem;
  border-width: 2px;
}

input:valid.form-control {
  border-color: var(--store-primary);
}

textarea:valid.form-control {
  border-color: var(--store-primary);
}

input[type="radio"] {
  visibility: hidden;
}

input + label {
  border-color: var(--store-primary);
  border-radius: 1rem;
  border-width: 2px;
}

input:checked + label {
  background: var(--store-primary);
}

.control-buttons {
  padding-top: 2em;
}


</style>