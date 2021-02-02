<template>
  <div>

    <settings-group label="Hauptfarbe:" description="Die Hauptfarbe sollte dem Farbschema Ihres Logos entsprechen.">
      <div slot="input" class="col-md-7 text-left">
        <input @change="myColor($event)" type="color" id="color-picker" value="#ff0000">
      </div>
    </settings-group>

  </div>
</template>

<script>
import SettingsGroup from "@/components/SettingsGroup";

export default {
  name: "Design",
  components: {SettingsGroup},
  data: function () {
    return {
      color: String
    }
  },
  methods: {
    myColor(e) {
      console.log(e.target.value)
      this.color = e.target.value
      document.querySelector(':root').style.setProperty('--store-primary', e.target.value.toString())
    }
  }
}


</script>

<style lang="scss">
</style>