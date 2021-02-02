<template>
  <div class="settings-group">
    <div class="row input">
      <label class="col-md-3 label settings-label text-right">{{ label }}</label>
      <slot name="input"></slot>
    </div>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-7 text-left settings-small">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsGroup",
  props: ['label', 'description']
}
</script>

<style scoped>
.settings-group {
  padding-bottom: 1.5em;
}

.settings-label {
  font-weight: bold;
}

.settings-small {
  font-size: small;
  color: grey;
}
</style>