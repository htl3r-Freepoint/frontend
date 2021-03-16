<template>
  <div>
    <fp-input label="Vorgefertigte Designs"
              description="Dies sind vorgefertigte Farbpaletten mit denen Sie nichts falsch machen können.">
      <button @click="setDesign('#dbdbdb', '#5c5c5c', '#F5f5f5', '#ffffff')" class="form-control">
        <farbpalette main="#dbdbdb" text="#5c5c5c" background="#F5f5f5" banner="#ffffff"></farbpalette>
      </button>
      <button @click="setDesign('#10cdb7', '#2c3e50', '#fafafa', '#ffffff')" class="form-control">
        <farbpalette main="#10cdb7" text="#2c3e50" background="#fafafa" banner="#ffffff"></farbpalette>
      </button>
    </fp-input>

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
import Farbpalette from "@/components/Farbpalette";

library.add(faPalette)

export default {
  name: "Design",
  components: {Farbpalette, FpInput},
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
    setDesign(main, text, background, banner) {
      this.$store.commit('setColorMain', main)
      document.querySelector(':root').style.setProperty(
          '--store-primary',
          this.$store.state.design.colorMain
      )
      this.$store.commit('setColorText', text)
      document.querySelector(':root').style.setProperty(
          '--text-color',
          this.$store.state.design.colorText
      )
      this.$store.commit('setColorBackground', background)
      document.querySelector(':root').style.setProperty(
          '--background-color',
          this.$store.state.design.colorBackground
      )
      this.$store.commit('setColorBanner', banner)
      document.querySelector(':root').style.setProperty(
          '--banner-color',
          this.$store.state.design.colorBanner
      )
    },
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