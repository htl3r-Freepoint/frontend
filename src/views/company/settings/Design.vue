<template>
  <div>
    <fp-input label="Primärfarbe" description="Die Primärfarbe bestimmt das Grundlegende aussehen ihrer Seite.">
      <input @change="setColor" type="color" :value="color.toString()" class="form-control">
    </fp-input>
  </div>
</template>

<script>
import FpInput from "@/components/Form Components/FpInput";

export default {
  name: "Design",
  components: {FpInput},
  data: function () {
    return {
      color: ''
    }
  },
  created() {
    this.color = this.$store.state.design.colorMain
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
    }
  }
}


</script>

<style lang="scss">
</style>