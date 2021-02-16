<template>
  <div class="form-group">
    <div class="input-group">
      <label v-if="label">{{label}}</label>
      <div v-if="$slots.prepend" class="input-group-prepend">
        <span class="input-group-text">
            <slot name="prepend"></slot>
          </span>
      </div>
      <slot></slot>
      <div v-if="$slots.append" class="input-group-append">
          <span class="input-group-text">
            <slot name="append"></slot>
          </span>
      </div>
    </div>
    <small class="form-text text-muted text-left">{{description}}</small>
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