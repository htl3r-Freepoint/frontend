<template>
  <div class="form-group">
    <label class="font-weight-bold d-block text-left">{{ label }}
      <div class="input-group mt-2">
      <span class="input-group-prepend" v-if="$slots.prepend">
        <span class="input-group-text"><slot name="prepend"></slot></span>
      </span>
        <slot><input class="form-control"></slot>
        <span class="input-group-append" v-if="$slots.append">
          <span class="input-group-text"><slot name="append"></slot></span>
      </span>
      </div>
    </label>
    <small class="form-text text-muted text-left">{{ description }}</small>
  </div>
</template>

<script>
export default {
  name: "FpInput",
  props: ['description', 'label']
}
</script>

<style scoped lang="scss">
label{
  color: var(--text-color);
}

.form-control{
  background-color: #efefef;
  border-width: 0px;
  &:hover{
    background-color: #d9d9d9;
  }
  &:focus{
    border-color: var(--store-primary);
    border-bottom-width: 2px;
  }
}

.input-group-text{
  background-color: var(--store-primary);
  color: white;
}
</style>