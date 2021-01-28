<template>
  <div class="container">

    <div class="col custom-control custom-switch align-self-end">
      <input id="edit-mode" type="checkbox" class="custom-control-input" v-model="editRights">
      <label class="custom-control-label" for="edit-mode">Edit Mode</label>
    </div>

    <div id="coupon-container" class="row justify-content-center">
      <coupon v-for="(coupon, id) in coupons" v-bind:key="id"
              class="col-12 col-md-4 col-sm-6"
              :coupon="coupon"
              :edit-rights="editRights">
      </coupon>

      <div v-if="editRights" class="add-coupon col-12 col-md-4 col-sm-6">
        <button class="btn-block"
                data-toggle="modal" data-target="#modalCreateNewCoupon">
          <i class="fas fa-plus-circle align-self-center"></i>
        </button>
      </div>
    </div>


    <!-- Button trigger modal -->
    <!--<div>
      <button class="btn" data-toggle="modal" data-target="#exampleModalCenter">
        <img class="icon" src="../assets/plus-circle.svg" width="25">
      </button>
    </div>-->

    <modal id="modalCreateNewCoupon" :title="'Neuer Coupon'">
      <form-new-coupon></form-new-coupon>
    </modal>

  </div>
</template>

<script>
import Axios from 'axios'
import Coupon from "@/components/Coupon";
import FormNewCoupon from "@/components/forms/FormNewCoupon";
import Modal from "@/components/Modal";

export default {
  name: "RabattMenu",
  components: {Modal, FormNewCoupon, Coupon},
  data() {
    return {
      user: '1',
      store: '1',
      editRights: true,
      coupons: [
        {
          id: 0,
          title: 'Hamburger',
          text: 'Genieße den saftigen Hamburger mit Gurken und Salat, um -20%',
          isPercent: true,
          price: 0.00,
          percentage: 20,
          value: 15
        },
        {
          id: 1,
          title: 'Cheeseburger',
          text: 'Genieße den saftigen Cheeseburger mit Gurken, Salat und geschmolzenem Ementaler, um -1€',
          isPercent: false,
          price: 1.00,
          percentage: 0,
          value: 25
        }
      ]
    }
  },
  methods: {
    getData() {
      Axios.get(this.$store.state.url + "/", {
        params: {
          user: this.user,
          store: this.store
        }
      }).then(r => this.coupons = r)
    }
  }
}
</script>

<style scoped lang="scss">

* {
  --card-margin: 1rem
}

#coupon-container {
  padding: 0.2rem 1.2rem
}

.add-coupon {
  margin: var(--card-margin) 0 var(--card-margin);
  width: 100%;
  display: block;

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