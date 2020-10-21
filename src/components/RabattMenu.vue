<template>
  <div class="section">
    <div class="row">
      <div class="col; card">
        One of three columns
      </div>
      <div class="col; card">
        One of three columns
      </div>
      <div class="col; card">
        One of three columns
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RabattMenu"
}
</script>

<style scoped>

.section {
  margin: auto;
  background: grey;
  opacity: .5;
  border-radius: 3px;
  margin-top: 50px;
  padding: 10px;
}

.card {
  width: 30%;
  align-self: center;
  background: whitesmoke;
  padding: 5px;
  border-radius: 3px;
  margin: 10px 10px;
  font-family: monospace;
}

.card.title {
  text-align: center;
}

</style>