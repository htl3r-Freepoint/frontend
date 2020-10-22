<template>
  <div class="section">
    <div class="row">
      <div class="col; card">
        One of three columns
      </div>
      <div class="col; card">
        One of three columns
      </div>
      <div class="col; card">
        One of three columns
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: "RabattMenu",
  data() {
    return{
      url: 'http://freepoint.at',
      user: '1',
      store: '1',
      options: {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
      }
    }
  },
  methods:{
    getData(){
      Axios.get(this.url, {
        params: {
          user: this.user,
          store: this.store
        }
      }, this.headers)
    }
  }
}
</script>

<style scoped>

.section {
  margin: auto;
  background: grey;
  opacity: .5;
  border-radius: 3px;
  margin-top: 50px;
  padding: 10px;
}

.card {
  width: 30%;
  align-self: center;
  background: whitesmoke;
  padding: 5px;
  border-radius: 3px;
  margin: 10px 10px;
  font-family: monospace;
}

.card.title {
  text-align: center;
}

</style>