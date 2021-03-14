<template>
  <div>
    <slot name="icon">

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
}

#faq-text {
  color: #777;
}
</style>