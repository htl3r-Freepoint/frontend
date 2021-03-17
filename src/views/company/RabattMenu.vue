<template>
  <div class="container">
    <h2 class="text-uppercase font-weight-bold">{{ $store.state.company.companyName }}</h2>

    <router-link class="btn btn-primary" to="/company/settings/profile" v-if="editRights === 2 || editRights === 3">
      Settings <font-awesome-icon icon="cog"/>
    </router-link>

    <div id="coupon-container" class="row justify-content-center py-2">
      <coupon v-for="(coupon, id) in coupons" v-bind:key="id"
              class="col-sm-6 col-md-4 col-xl-3"
              :coupon="coupon"
              :edit-rights="editRights">
        <font-awesome-icon slot="actionIcon" style="position: absolute; left: 9.5px; top:10.5px" icon="shopping-cart"/>
      </coupon>

      <div v-if="editRights" class="add-coupon col-sm-6 col-md-4 col-xl-3">
        <button class="btn-block"
                data-toggle="modal" data-target="#modalCreateNewCoupon">
          <font-awesome-icon icon="plus-circle"/>
        </button>
      </div>
    </div>

    <modal id="modalCreateNewCoupon" :title="'Neuer Coupon'">
      <form-new-coupon></form-new-coupon>
    </modal>

  </div>
</template>

<script>
import Coupon from "@/components/Coupon";
import FormNewCoupon from "@/components/forms/FormNewCoupon";
import Modal from "@/components/Modal";

import {library} from "@fortawesome/fontawesome-svg-core";
import {faCog, faPlusCircle, faShoppingCart} from "@fortawesome/free-solid-svg-icons";

library.add(faPlusCircle, faShoppingCart, faCog)

export default {
  name: "RabattMenu",
  components: {Modal, FormNewCoupon, Coupon},
  data() {
    return {
      editRights: 0,
      coupons: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.$http.post(this.$store.state.url + "/getRabatt", {
        hash: this.$store.state.user.token ? this.$store.state.user.token : "",
        firmenname: this.$store.state.company.companyName
      }).then(response => {
        console.debug("Coupons:", response)
        this.coupons = response.data.coupons
        this.editRights = response.data.editRights
      })
    },
    saveCoupon() {

    }
  }
}
</script>

<style scoped lang="scss">

* {
  --card-margin: 1rem
}

#coupon-container {
  padding: 0.2rem 1.2rem;
}

.add-coupon {
  margin: 1rem 0 1rem;
  width: 100%;

  button {
    border: .2rem dashed var(--store-primary);
    background: none;
    color: var(--store-primary);
    height: 100%;
    transition: .5s;
    font-size: 2em;

    &:hover {
      background: var(--store-primary);
      color: white;
      box-shadow: 12px 15px 20px 0 rgba(46, 61, 73, 0.15);
    }
  }
}

</style>