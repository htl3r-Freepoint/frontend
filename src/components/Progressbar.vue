<template>
  <div class="progressbar"></div>
</template>

<script>
export default {
  name: "progressbar"
}
</script>

<style scoped lang="scss">
.progressbar {
  height: 1rem;
  width: 10rem;
  border-radius: 0.5rem;
  background: #b3b3b3;

  &:after {
    content: "";
    width: 3rem;
    height: 1rem;
    background: var(--store-primary);
    display: block;
    border-radius: 0.5rem;
    animation: animation 1.5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
  }

  @keyframes animation {
    0% {
      transform: translateX(0rem);
    }
    50% {
      transform: translateX(7rem);
    }
    100% {
      transform: translateX(0rem);
    }
  }
}
</style>