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
        <td>Sonntag</td>
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
  name: "FormNewStore",
  components: {FpInput},
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
      this.address = ""
      this.coords = [0, 0]
      this.open = {
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: "",
        sunday: ""
      }
      this.image = this.store.image
    }
  }
}
</script>

<style scoped>
</style>