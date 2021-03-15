<template>
  <div class="mb-5">
    <slot name="icon" class="m-5">

    </slot>

    <p id="faq-headline">
      <slot name="headline"></slot>
    </p>

    <p id="faq-text">
      <slot name="text"></slot>
    </p>

  </div>
</template>

<script>

export default {
  name: "FaqElement"
}
</script>

<style scoped>
.faq-icon {
  color: #00A982;
}

#faq-headline {
  color: black;
  font-size: 1.3em;
  font-weight: bold;
  margin-top: 1em;
}

#faq-text {
  color: #777;
}
</style>