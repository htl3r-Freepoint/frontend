<template>
  <div>
    <label>
      <input v-model="title">
    </label>
  </div>
</template>

<script>
export default {
  name: "FlyerCustomizer",
  data: function () {
    return {
      title: ""
    };
  }
}
</script>

<style scoped>

</style>
