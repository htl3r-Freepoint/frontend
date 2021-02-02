<template>
  <div class="settings-group">
    <div class="row input">
      <label class="col-md-3 label settings-label">{{ label }}</label>
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
@media (max-width: 561px) {
  .settings-label {
    text-align: left;
  }
}

@media (min-width: 561px) {
  .settings-label {
    text-align: right;
  }
}

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