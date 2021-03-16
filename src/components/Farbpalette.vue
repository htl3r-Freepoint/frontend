<template>
  <div id="grid">
      <div id="main"></div>
      <div class="text"></div>
      <div class="background"></div>
      <div class="banner"></div>
  </div>
</template>

<script>
export default {
  name: "farbpalette",
  props: ['main', 'text', 'background', 'banner'],
  created() {
    document.getElementById('#main').style.setProperty(
        '--main',
        this.main
    )
    document.querySelector('#grid').style.setProperty(
        '--text',
        this.text
    )
    document.querySelector('#grid').style.setProperty(
        '--background',
        this.background
    )
    document.querySelector('#grid').style.setProperty(
        '--banner',
        this.banner
    )
  }
}
</script>

<style scoped lang="scss">

#grid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: minmax(0.5em, auto);

  & .text{
    background-color: var(--text);
  }
  & .background{
    background-color: var(--background);
  }
  & .banner{
    background-color: var(--banner);
  }
}
#main{
  background-color: var(--main);
}
</style>