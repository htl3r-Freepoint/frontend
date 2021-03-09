<template>
  <div>
    <fp-input label="Primärfarbe"
              description="Die Primärfarbe bestimmt das grundlegende Aussehen ihrer Seite. Sie wird auf Buttons und als Akzentfarbe bei verschiedenen Elementen benutzt.">
      <font-awesome-icon slot="prepend" icon="palette"/>
      <input @change="setColor" type="color" :value="color.toString()" class="form-control">
    </fp-input>

    <fp-input label="Textfarbe" description="Mit dieser Auswahl verändern Sie die Farbe des Textes.">
      <font-awesome-icon slot="prepend" icon="palette"/>
      <input @change="setTextColor" type="color" :value="textColor.toString()" class="form-control">
    </fp-input>

    <fp-input label="Hintergrundfarbe" description="Mit dieser Auswahl bestimmen Sie die Hintergrundfarbe.">
      <font-awesome-icon slot="prepend" icon="palette"/>
      <input @change="setBackgroundColor" type="color" :value="backgroundColor.toString()" class="form-control">
    </fp-input>

    <fp-input label="Banner-Farbe" description="Mit dieser Auswahl verändern Sie die Farbe des Banners bzw. der Navigationsleiste.">
      <font-awesome-icon slot="prepend" icon="palette"/>
      <input @change="setBannerColor" type="color" :value="bannerColor.toString()" class="form-control">
    </fp-input>
  </div>
</template>

<script>
import FpInput from "@/components/Form Components/FpInput";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faPalette} from "@fortawesome/free-solid-svg-icons";

library.add(faPalette)

export default {
  name: "Design",
  components: {FpInput},
  data: function () {
    return {
      color: '',
      textColor: '',
      backgroundColor: '',
      bannerColor: '',
    }
  },
  created() {
    this.color = this.$store.state.design.colorMain
    this.textColor = this.$store.state.design.colorText
    this.backgroundColor = this.$store.state.design.colorBackground
    this.bannerColor = this.$store.state.design.colorBanner
    console.debug(this.color)
  },
  methods: {
    setColor(event) {
      console.log(event.target.value)
      this.color = event.target.value
      this.$store.commit('setColorMain', this.color)
      document.querySelector(':root').style.setProperty(
          '--store-primary',
          this.$store.state.design.colorMain
      )
    },
    setTextColor(event) {
      console.log(event.target.value)
      this.textColor = event.target.value
      this.$store.commit('setColorText', this.textColor)
      document.querySelector(':root').style.setProperty(
          '--text-color',
          this.$store.state.design.colorText
      )
    },
    setBackgroundColor(event) {
      console.log(event.target.value)
      this.backgroundColor = event.target.value
      this.$store.commit('setColorBackground', this.backgroundColor)
      document.querySelector(':root').style.setProperty(
          '--background-color',
          this.$store.state.design.colorBackground
      )
    },
    setBannerColor(event) {
      console.log(event.target.value)
      this.bannerColor = event.target.value
      this.$store.commit('setColorBanner', this.bannerColor)
      document.querySelector(':root').style.setProperty(
          '--banner-color',
          this.$store.state.design.colorBanner
      )
    }
  }
}


</script>

<style lang="scss">
</style>