<template>
  <form role="form">
    <fp-input>
      <i slot="prepend" class="fas fa-address-book"/>
      <input type="text" class="form-control" v-model="address">
    </fp-input>
    <table class="col">
      <tr>
        <td>Montag</td>
        <td><input type="text" class="form-control" v-model="open.monday"></td>
      </tr>
      <tr>
        <td>Dienstag</td>
        <td><input type="text" class="form-control" v-model="open.tuesday"></td>
      </tr>
      <tr>
        <td>Mittwoch</td>
        <td><input type="text" class="form-control" v-model="open.wednesday"></td>
      </tr>
      <tr>
        <td>Donnerstag</td>
        <td><input type="text" class="form-control" v-model="open.thursday"></td>
      </tr>
      <tr>
        <td>Freitag</td>
        <td><input type="text" class="form-control" v-model="open.friday"></td>
      </tr>
      <tr>
        <td>Samstag</td>
        <td><input type="text" class="form-control" v-model="open.saturday"></td>
      </tr>
      <tr>
        <td>Sontag</td>
        <td><input type="text" class="form-control" v-model="open.sunday"></td>
      </tr>
    </table>
    <div class="form-group input-group btn-group">
      <button type="button" class="btn btn-danger" data-dismiss="modal" @click="resetData">Abbrechen</button>
      <button type="button" class="btn btn-primary" data-dismiss="modal">Speichern</button>
    </div>
  </form>
</template>

<script>
import Axios from "axios";
import FpInput from "@/components/Form Components/FpInput";

export default {
  name: "FormEditStore",
  components: {FpInput},
  props: ['store'],
  data() {
    return {
      address: "",
      coords: [0, 0],
      open: {
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
        saturday: '',
        sunday: ''
      },
      image: ""
    }
  },
  created() {
    if (this.store) {
      this.resetData()
    }
  },
  methods: {
    postNewCoupon() {
      Axios.post(this.$store.state.url + '/store', {
        params: {
          id: this.store.id,
          coupon: {
            address: this.address,
            coords: this.coords,
            open: this.open,
            image: this.image
          }
        }
      })
    },
    resetData() {
      this.address = this.store.address
      this.coords = this.store.coords
      this.open = this.store.open
      this.image = this.store.image
    }
  }
}
</script>

<style scoped>
</style>