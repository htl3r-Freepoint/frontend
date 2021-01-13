<template>
  <div id="app">
    <navigationsleiste></navigationsleiste>
    <router-view class="router-view"/>
  </div>
</template>

<script>
import Navigationsleiste from "@/components/Navigationsleiste";

export default {
  name: "App",
  components: {Navigationsleiste},
  methods:{
  }
}
</script>

<style lang="scss">

*{
  --store-primary: #10cdb7;
  --text-color: #2c3e50;
}

p{
  color: var(--text-color);
}

.primary-text{
  color: var(--store-primary);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #153E73;
  background: #FAFAFA;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

.router-view{
}

.btn-primary{
  background: var(--store-primary);
}

.container{
  margin: 16px auto;
}

</style>