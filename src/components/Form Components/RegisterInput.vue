<template>
  <div class="form-group">
    <label class="font-weight-bold d-block text-left">{{ label }}
      <div class="input-group mt-2">
      <span class="input-group-prepend" v-if="$slots.prepend">
        <span class="input-group-text"><slot name="prepend"></slot></span>
      </span>
        <slot><input class="form-control danger"></slot>
      </div>
    </label>
    <small class="form-text text-muted text-left">{{ description }}</small>
  </div>
</template>

<script>
export default {
  name: "RegisterInput",
  props: ['description', 'label']
}
</script>

<style scoped lang="scss">
label{
  color: var(--text-color);
  &:hover{
    border-radius: 20px;
    box-shadow: 0px 0px 4px #888888;
  }
}

.form-control{
  border-radius: 20px;
  border-left: none;
  border-color: #bcbcbc;

  &:hover{

  }
  &:focus{
    box-shadow: none;
    border-color: #bcbcbc;
  }
}

.input-group-text{
  border-color: #bcbcbc;
  border-radius: 25px;
  background-color: transparent;
  color: #10cdb7;
}
</style>