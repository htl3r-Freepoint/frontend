<template>
  <footer class="d-flex justify-content-around py-3">
    <div>Ein Projekt der HTL Rennweg.</div>
    <div>Copyright © 2021 Freepoint | Powered by Freepoint</div>
    <router-link class="router-link" to="/imprint">
      Impressum
    </router-link>
  </footer>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>
footer{
  background-color: #00A982;
  color: white;
  font-size: 1.2em;
}

.router-link{
  color: white;
}

</style>