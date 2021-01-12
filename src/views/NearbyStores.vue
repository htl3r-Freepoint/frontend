<template>
  <div class="container">
    <div class="row m-3">
      <store class="col-12 col-md-4 col-sm-6"
             v-for="(store, id) in stores" :key="id"
             :store="store"></store>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import Store from "@/components/Store";

export default {
  name: "NearbyStores",
  components: {Store},
  data() {
    return {
      url: 'https://freepoint.htl3r.com/api/GetBetrieb.json',
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
        },
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
        },
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
    this.getData()
  },
  methods: {
    getData() {
      Axios.post(this.url, {
        name: 'Schnitzelbude1337',
      })
          .then(result => {
            console.log(result)
            this.stores = result
          })
    }
  }
}
</script>

<style scoped>

</style>