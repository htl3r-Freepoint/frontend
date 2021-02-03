<template>
  <div>
    <table class="col">
      <tr class="text-left">
        <th>Address</th>
        <th>Öffnungszeiten</th>
      </tr>
      <store v-for="(store, id) in stores" :key="id"
             :store="store"/>
    </table>
    <button class="btn btn-primary btn-block"
            data-toggle="modal" data-target="#modalCreateNewStore">
      <i class="fas fa-plus-circle align-self-center"></i>
    </button>
    <modal id="modalCreateNewStore" :title="'Neuer Store'">
      <form-new-store></form-new-store>
    </modal>
  </div>
</template>

<script>

import Axios from "axios";
import Store from "@/components/Store";
import FormNewStore from "@/components/forms/FormNewStore";
import Modal from "@/components/Modal";

export default {
  name: "Location",
  components: {Modal, FormNewStore, Store},
  data() {
    return {
      stores: [
        {
          address: "Rennweg 89b, 1030 Wien",
          coords: [48.19112301769958, 16.397769142444105],
          open: {
            monday: "08:00-18:00",
            tuesday: "08:00-18:00",
            wednesday: "08:00-18:00",
            thursday: "08:00-18:00",
            friday: "08:00-18:00"
          },
          image: ""
        }
      ]
    }
  },
  created() {
    Axios.post(this.$store.state.url + '/GetBetrieb.json', {
      name: 'Schnitzelbude1337',
    }).then(result => {
      console.log(result.data)
      this.stores = result.data
    })
  },
  methods: {
    saveStores() {
      Axios.post(this.$store.state.url + "saveBetrieb")
    }
  }
}
</script>

<style scoped>

</style>