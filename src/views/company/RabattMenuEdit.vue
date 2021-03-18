<template>
  <div class="container">
    <h2 class="text-uppercase font-weight-bold">{{$store.state.companyName}}</h2>

    <router-link class="btn btn-primary" to="/company/coupons">Coupons</router-link>

    <div id="coupon-container" class="row justify-content-center py-2">
      <coupon-edit v-for="(coupon, id) in coupons" v-bind:key="id"
                   class="col-sm-6 col-md-4 col-xl-3"
                   :coupon="coupon">
      </coupon-edit>

      <div class="add-coupon col-sm-6 col-md-4 col-xl-3">
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
import Axios from 'axios'
import FormNewCoupon from "@/components/forms/FormNewCoupon";
import Modal from "@/components/Modal";
import CouponEdit from "@/components/CouponEdit";

import {library} from "@fortawesome/fontawesome-svg-core";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";

library.add(faPlusCircle)

export default {
  name: "RabattMenuEdit",
  components: {CouponEdit, Modal, FormNewCoupon},
  data() {
    return {
      user: '1',
      store: '1',
      coupons: [],
      couponsNew: [],
      couponsEdit: [],
      couponsDelete: []
    }
  },
  methods: {
    getData() {
      Axios.get(this.$store.state.url + "/Rabatte", {
        params: {
          user: this.user,
          store: this.$route.params.company
        }
      }).then(r => this.coupons = r)
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