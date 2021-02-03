<template>
  <div>

    <settings-group label="Hauptfarbe:" description="Die Hauptfarbe sollte dem Farbschema Ihres Logos entsprechen.">
      <div slot="input" class="col-md-7 text-left">
        <input @change="myColor($event)" type="color" id="color-picker" value="#ff0000">
      </div>
    </settings-group>
    <fp-input description="Die Primärfarbe bestimmt das Grundlegende aussehen ihrer Seite.">
      <i slot="prepend" class="fas fa-palette"/>
      <input @change="myColor" type="color" :value="color.toString()">
    </fp-input>
  </div>
</template>

<script>
import SettingsGroup from "@/components/SettingsGroup";
import FpInput from "@/components/Form Components/FpInput";

export default {
  name: "Design",
  components: {FpInput, SettingsGroup},
  data: function () {
    return {
      color: ''
    }
  },
  created() {
    this.color = getComputedStyle(document.querySelector(':root')).getPropertyValue('--store-primary').toString()
    console.debug(this.color)
  },
  methods: {
    myColor(event) {
      console.log(event.target.value)
      this.color = event.target.value
      document.querySelector(':root').style.setProperty('--store-primary', event.target.value.toString())
    }
  }
}


</script>

<style lang="scss">
</style>