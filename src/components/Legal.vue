<template>
  <div class="container-fluid">
    <h1 class="heading">{{ title }}</h1>
    <hr>
    <div class="container text-left card" id="legal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
name: "Legal",
  props: ['title']
}
</script>

<style scoped>
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 4px solid #10cdb7;
}
</style>