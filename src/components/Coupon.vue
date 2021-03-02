<template>
  <div class="coupon">
    <div class="card">
      <div class="card-body text-left col">

        <h4 class="card-title font-weight-bold">{{ this.coupon.title }}</h4>

        <p>{{ this.coupon.text }}</p>

        <div class="row">
          <div class="col-6">
            <h4 class="font-weight-bold">{{
                coupon.isPercent ?
                    !(this.coupon.percentage > 0) || this.coupon.percentage >= 100 ?
                        'Gratis' : '-' + this.coupon.percentage + '%'
                    :
                    !(this.coupon.price > 0) || this.coupon.price >= 100 ?
                        'Gratis' : '-' + this.coupon.price + '€'
              }}</h4>
          </div>

          <div class="col-6 text-right">
            <h4 class="primary-text font-weight-bold text-nowrap">{{ this.coupon.value + " FP" }}</h4>
          </div>
        </div>

      </div>

      <div class="control-buttons">
        <button v-if="!editRights" class="btn btn-primary btn-buy" data-toggle="modal"
                :data-target="'#modalBuyCoupon' + coupon.id">
          <font-awesome-icon icon="shopping-cart"/>
        </button>

        <button v-if="editRights" class="btn btn-primary mb-1" data-toggle="modal"
                :data-target="'#modalEditCoupon' + coupon.id" v-on:click="edit = true">
          <font-awesome-icon icon="pen"/>
        </button>

        <button v-if="editRights" class="btn btn-danger mt-1">
          <font-awesome-icon icon="trash"/>
        </button>
      </div>

    </div>

    <modal :id="'modalEditCoupon' + coupon.id">
      <form-edit-coupon :coupon="coupon"></form-edit-coupon>
    </modal>
    <modal :id="'modalBuyCoupon' + coupon.id">
      <coupon-detail :coupon="coupon"></coupon-detail>
    </modal>

  </div>
</template>

<script>
import Modal from "@/components/Modal";
import FormEditCoupon from "@/components/forms/FormEditCoupon";
import CouponDetail from "@/components/CouponDetail";

import {library} from "@fortawesome/fontawesome-svg-core";
import {faShoppingCart, faPen, faTrash} from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faPen, faTrash)

export default {
  name: "Coupon",
  components: {CouponDetail, FormEditCoupon, Modal},
  props: ['coupon', 'editRights'],
}
</script>

<style scoped lang="scss">

.coupon {
  margin: 1rem 0 1rem;

  .control-buttons {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: -20px;
    top: -20px;
  }

  .card {
    transition: 0.3s;
    height: 100%;
    border-bottom: var(--store-primary) solid 4px;

    &:hover {
      box-shadow: 12px 12px 20px 0 rgba(70, 70, 70, 0.15);
      border-bottom: rgba(0, 0, 0, .3) solid 4px;
      transform: translateY(-4px);
    }
  }

  .card-image-overlay span {
    display: inline-block;
  }
}

@keyframes couponHover {
  from {
    box-shadow: none
  }
  to {
    box-shadow: 12px 12px 20px 0 rgba(70, 70, 70, 0.15);
  }
}

.btn-buy {
  background: var(--store-primary);
  width: 50px;
  height: 50px;
  border-radius: 30px;

  &:focus {
    box-shadow: 0 0 0 0 !important;
  }

  &:active {
    background: var(--store-primary) !important;
    border-color: var(--store-primary) !important;
  }
}

.btn {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  transition: .2s;
  border: none;

  &:hover {
    border-radius: 8px;
  }
}

.btn-primary:focus {
  box-shadow: 0 0 0 0 !important;
}

</style>