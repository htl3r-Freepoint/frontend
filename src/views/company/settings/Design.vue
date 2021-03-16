<template>
  <div>
    <fp-input label="Vorgefertigte Designs"
              description="Dies sind vorgefertigte Farbpaletten mit denen Sie nichts falsch machen können.">
      <button @click="setDesign('#dbdbdb', '#5c5c5c', '#F5f5f5', '#ffffff')" class="form-control p-0">
        <farbpalette main="#dbdbdb" text="#5c5c5c" background="#F5f5f5" banner="#ffffff"></farbpalette>
      </button>
      <button @click="setDesign('#10cdb7', '#2c3e50', '#fafafa', '#ffffff')" class="form-control p-0">
        <farbpalette main="#10cdb7" text="#2c3e50" background="#fafafa" banner="#ffffff"></farbpalette>
      </button>
      <button @click="setDesign('#0f61cc', '#2c3e50', '#fafafa', '#ffffff')" class="form-control p-0">
        <farbpalette main="#0f61cc" text="#2c3e50" background="#fafafa" banner="#ffffff"></farbpalette>
      </button>
      <button @click="setDesign('#Cc0f0f', '#2c3e50', '#ededed', '#ffffff')" class="form-control p-0">
        <farbpalette main="#Cc0f0f" text="#2c3e50" background="#fafafa" banner="#ffffff"></farbpalette>
      </button>
      <button @click="setDesign('#000000', '#000000', '#000000', '#ffffff')" class="form-control p-0">
        <farbpalette main="#000000" text="#2c3e50" background="#fafafa" banner="#ffffff"></farbpalette>
      </button>
      <button @click="setDesign('#07575b', '#003b46', '#66a5ad', '#C4dfe6')" class="form-control p-0">
        <farbpalette main="#07575b" text="#003b46" background="#66a5ad" banner="#C4dfe6"></farbpalette>
      </button>
      <button @click="setDesign('#Aaa188', '#81786e', '#Eae2d6', '#D5c3aa')" class="form-control p-0">
        <farbpalette main="#Aaa188" text="#81786e" background="#Eae2d6" banner="#D5c3aa"></farbpalette>
      </button>
      <button @click="setDesign('#Cd7213', '#16253d', '#Efb509', '#002c54')" class="form-control p-0">
        <farbpalette main="#Cd7213" text="#2c3e50" background="#fafafa" banner="#ffffff"></farbpalette>
      </button>
      <button @click="setDesign('#D1b280', '#080706', '#efefef', '#B2a69f')" class="form-control p-0">
        <farbpalette main="#D1b280" text="#2c3e50" background="#fafafa" banner="#ffffff"></farbpalette>
      </button>
      <button @click="setDesign('#Cd7213', '#16253d', '#Eabe39', '#Eaa81a')" class="form-control p-0">
        <farbpalette main="#Cd7213" text="#2c3e50" background="#fafafa" banner="#ffffff"></farbpalette>
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