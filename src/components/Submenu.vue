<template>
  <div class="container">

    <div class="navbar navbar-expand-lg navbar-light mobile">
      <div class="row justify-content-between mb-1">
        <h3>{{ title }}</h3>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#links"
                aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
          <font-awesome-icon icon="bars"/>
        </button>
      </div>
      <div id="links" class="collapse show navbar-collapse">
        <slot name="links"></slot>
      </div>
    </div>

    <div class="card">
      <h3 class="text-left desktop px-3" v-if="title">{{ title }}</h3>
      <div class="col d-flex flex-row p-0">
        <div class="col-auto desktop">
          <slot name="links"></slot>
        </div>
        <div class="col border-left">
          <slot></slot>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {library} from "@fortawesome/fontawesome-svg-core";
import {faBars} from "@fortawesome/free-solid-svg-icons";

library.add(faBars)

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
  color: var(--text-color);
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