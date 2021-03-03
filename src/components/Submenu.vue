<template>
  <div class="container">

    <div class="navbar navbar-expand-lg navbar-light mobile">
      <div class="row justify-content-between mb-1">
        <h3>{{ title }}</h3>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#links"
                aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div id="links" class="collapse show navbar-collapse">
        <slot name="links"></slot>
      </div>
    </div>

    <div class="card">
      <h3 class="text-left settings-main-header desktop" v-if="title">{{ title }}</h3>
      <div class="row">
        <div class="col-auto desktop container">
          <slot name="links"></slot>
        </div>
        <div class="col container border-left">
          <slot></slot>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Submenu",
  props: ['title']
}
</script>

<style scoped lang="scss">

.mobile {
  display: none;
}

.desktop {
  display: block;
  padding-right: 0;
}

@media (max-width: 560px) {
  .mobile {
    display: block;
  }

  .desktop {
    display: none;
  }
}

a, .router-link, .router-link-active {
  padding: .4em .5em;
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  & div, p {
    margin-left: 1em;
  }

  & svg {
    font-size: 1.5em;
  }

  &:hover {
    background: lightgrey;
  }
}

.router-link-active {
  color: var(--store-primary);
}

</style>