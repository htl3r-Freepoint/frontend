<template>
  <div>
    <label class="font-weight-bold d-block text-left">Vorgefertigte Designs</label>
    <div class="d-flex">
      <button v-for="(palette, id) in predefinedPallettes" :key="id"
              @click="setDesign(palette)"
              class="form-control p-0 m-1">
        <farbpalette :palette="palette"></farbpalette>
      </button>
    </div>
    <small class="form-text text-muted text-left mb-4">
      Dies sind vorgefertigte Farbpaletten mit denen Sie nichts falsch machen können.
    </small>

    <fp-input label="Primär-Farbe"
              description="Die Primärfarbe bestimmt das grundlegende Aussehen ihrer Seite. Sie wird auf Buttons und als Akzentfarbe bei verschiedenen Elementen benutzt.">
      <font-awesome-icon slot="prepend" icon="palette"/>
      <input @change="setColorMain" type="color" :value="design.colorMain" class="form-control">
    </fp-input>

    <fp-input label="Text-Farbe" description="Mit dieser Auswahl verändern Sie die Farbe des Textes.">
      <font-awesome-icon slot="prepend" icon="palette"/>
      <input @change="setColorText" type="color" :value="design.colortext" class="form-control">
    </fp-input>

    <fp-input label="Hintergrund-Farbe" description="Mit dieser Auswahl bestimmen Sie die Hintergrundfarbe.">
      <font-awesome-icon slot="prepend" icon="palette"/>
      <input @change="setColorBackground" type="color" :value="design.colorBackground" class="form-control">
    </fp-input>

    <fp-input label="Banner-Farbe"
              description="Mit dieser Auswahl verändern Sie die Farbe des Banners bzw. der Navigationsleiste.">
      <font-awesome-icon slot="prepend" icon="palette"/>
      <input @change="setColorBanner" type="color" :value="design.colorBanner" class="form-control">
    </fp-input>
  </div>
</template>

<script>
import FpInput from "@/components/Form Components/FpInput";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faPalette} from "@fortawesome/free-solid-svg-icons";
import Farbpalette from "@/components/Farbpalette";

import Palette from '@/assets/classes/Palette'

library.add(faPalette)

export default {
  name: "Design",
  components: {Farbpalette, FpInput},
  data: function () {
    return {
      predefinedPallettes: [
        new Palette('#10cdb7', '#2c3e50', '#fafafa', '#ffffff'),
        new Palette('#B0b0b0', '#5c5c5c', '#F5f5f5', '#ffffff'),
        new Palette('#B72424', '#000000', '#B45555', '#ffffff'),
        new Palette('#424242', '#000000', '#000000', '#ffffff'),
        new Palette('#07575b', '#003b46', '#66a5ad', '#C4dfe6'),
        new Palette('#Aaa188', '#665f57', '#Eae2d6', '#D5c3aa'),
        new Palette('#3b0156', '#4b2867', '#E0dfff', '#A99acb'),
        new Palette('#Ff7700', '#16253d', '#Ffbf66', '#ffffff'),
        new Palette('#008509', '#000000', '#64be6f', '#ffffff')
      ],
      design: new Palette('#10cdb7', '#2c3e50', '#fafafa', '#ffffff'),
      query: document.querySelector(':root').style
    }
  },
  created() {

  },
  /*beforeRouteLeave(to, from, next){

  },*/
  methods: {
    setDesign(palette) {
      console.debug("Setting styles")

      this.$store.commit('setDesign', palette.main, palette.text, palette.background, palette.banner)
      console.debug("Design", this.design)
      this.designTemp = this.$store.state.design
      console.debug("DesignTemp", this.designTemp)
      console.debug("Design", this.design)

      this.query.setProperty('--store-primary', palette.main)
      this.query.setProperty('--text-color', palette.text)
      this.query.setProperty('--background-color', palette.background)
      this.query.setProperty('--banner-color', palette.banner)
    },
    setColorMain(event) {
      console.debug(this.design)
      let color = event.target.value
      console.debug(color)
      this.design.colorMain = color
      this.$store.commit('setColorMain', color)
      this.query.setProperty('--store-primary', color)
    },
    setColorText(event) {
      let color = event.target.value
      console.debug(color)
      this.design.colortext = color
      this.$store.commit('setColorText', color)
      this.query.setProperty('--text-color', color)
    },
    setColorBackground(event) {
      let color = event.target.value
      console.debug(color)
      this.design.colorBackground = color
      this.$store.commit('setColorBackground', color)
      this.query.setProperty('--background-color', color)
    },
    setColorBanner(event) {
      let color = event.target.value
      console.debug(color)
      this.design.colorBanner = color
      this.$store.commit('setColorBanner', color)
      this.query.setProperty('--banner-color', color)
    }
  }
}


</script>

<style lang="scss">
label {
  color: var(--text-color);
}
</style>