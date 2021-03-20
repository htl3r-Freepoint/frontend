<template>
  <div id="grid">
      <div class="main"></div>
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
    /**
    document.getElementById('#grid').style.setProperty(
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
    )*/
  }
}
</script>

<style scoped lang="scss">

#grid{
  display: grid;
  padding: 0;
  grid-auto-rows: minmax(0.8em, auto);
  --main: #07575b;
  --text: #003b46;
  --background: #66a5ad;
  --banner: #C4dfe6;

  .main{
    background-color: var(--main);
    grid-column: 1;
    grid-row: 1;
  }
  & .text{
    background-color: var(--text);
    grid-column: 2;
    grid-row: 1;
  }
  & .background{
    background-color: var(--background);
    grid-column: 1;
    grid-row: 2;
  }
  & .banner{
    background-color: var(--banner);
    grid-column: 2;
    grid-row: 2;
  }
}
</style>