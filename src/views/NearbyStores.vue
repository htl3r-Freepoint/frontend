<template>
  <div class="container">
    <div id="map" class="sticky-top"/>
    <div class="row m-3">
      <store class="col-12 col-md-4 col-sm-6"
             v-for="(store, id) in stores" :key="id"
             :store="store"></store>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import mapboxgl from "mapbox-gl"
import "mapbox-gl/src/css/mapbox-gl.css"
import Store from "@/components/Store";

export default {
  name: "NearbyStores",
  components: {Store},
  data() {
    return {
      stores: []
      /*stores: [
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
      ]*/
    }
  },
  mounted() {
    mapboxgl.accessToken = "pk.eyJ1Ijoia3Jpc3RpYW4xMzIiLCJhIjoiY2trZHVqdm1qMDBzbDJ2cng3OGF4bTBtOSJ9.l3eH89atnVgPNJwrnAPP1Q"
    this.map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/kristian132/ckkduqbkx033417p5zeu871j6'
    })
    this.map.addControl(new mapboxgl.NavigationControl())

    //getData
    Axios.post(this.$store.state.url + '/GetBetrieb.json', {
      name: 'Schnitzelbude1337',
    })
        .then(result => {
          console.log(result.data)
          this.stores = result.data

          //SetMarkers
          this.stores.forEach(store => {
            if (store.coords) {
              store.marker = new mapboxgl.Marker()
                  .setLngLat(store.coords)
                  .addTo(this.map)
              console.debug("Creating Marker", store.coords)
            }
          })

        })
  }
}
</script>

<style scoped>

#map {
  height: 25vh;
}

</style>