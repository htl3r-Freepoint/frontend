<template>
  <div id="grid">
    <div :style="main"/>
    <div :style="text"/>
    <div :style="background"/>
    <div :sytel="banner"/>
  </div>
</template>

<script>
import Palette from '@/assets/classes/Palette'

export default {
  name: "farbpalette",
  props: {
    palette: Palette
  },
  data() {
    return {
      main: {
        backgroundColor: this.palette.main
      },
      text: {
        backgroundColor: this.palette.text
      },
      background: {
        backgroundColor: this.palette.background
      },
      banner: {
        backgroundColor: this.palette.banner
      }
    }
  }
}
</script>

<style scoped lang="scss">

#grid {
  height: 100%;
  width: 100%;
  display: grid;
  padding: 0;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;

  div:first-child {
    grid-column: span 3;
  }
}
</style>