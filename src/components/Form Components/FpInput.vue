<template>
  <div class="form-group">
    <label class="text-left" v-if="label">{{ label }}</label>
    <div class="input-group mb-2">
      <span class="input-group-prepend input-group-text" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </span>
      <slot><input class="form-control danger"></slot>
      <span class="input-group-append input-group-text" v-if="$slots.append">
        <slot name="append"></slot>
      </span>
      <small class="form-text text-muted text-left">{{ description }}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: "FpInput",
  props: ['description', 'label']
}
</script>

<style scoped>

</style>