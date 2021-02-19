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
      <div v-if="editRights" class="edit-buttons btn-toolbar">
        <button class="btn btn-primary mb-1" data-toggle="modal"
                :data-target="'#modalEditCoupon' + coupon.id" v-on:click="edit = true">
          <i class="fas fa-pen"></i>
        </button>

        <button class="btn btn-danger mt-1">
          <i class="fas fa-trash"></i>
        </button>
      </div>

      <div v-else class="buy-buttons btn-toolbar">
        <button class="btn-buy btn-primary" data-toggle="modal"
                :data-target="'#modalBuyCoupon'">
          <i class="fas fa-shopping-cart"></i>
        </button>
      </div>

    </div>
    <modal :id="'modalEditCoupon' + coupon.id">
      <form-edit-coupon :coupon="coupon"></form-edit-coupon>
    </modal>

  </div>
</template>

<script>
import Modal from "@/components/Modal";
import FormEditCoupon from "@/components/forms/FormEditCoupon";

export default {
  name: "Coupon",
  components: {FormEditCoupon, Modal},
  props: ['coupon', 'editRights'],
}
</script>

<style scoped lang="scss">

.coupon {
  margin: 1rem 0 1rem;

  .buy-buttons{
    display: flex;
    flex-direction: column;
    position: absolute;
    width: fit-content;
    right: -20px;
    top: -20px;
  }

  .edit-buttons {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: -20px;
    top: -20px;
  }

  .card {
    transition: 0.3s;
    height: 100%;

    &:hover {
      box-shadow: 12px 12px 20px 0 rgba(70, 70, 70, 0.15);
    }
  }

  .card-image-overlay span {
    display: inline-block;
  }
}

.btn-buy {
  background: var(--store-primary);
  width: 50px;
  height: 50px;
  border-radius: 30px;
  transition: .2s;
  border: solid;
  border-color: var(--store-primary);

  &:hover {
    border-radius: 15px;
  }
}

.btn-buy:focus{
  box-shadow:0 0 0 0 !important;
}

.btn-buy:active{
  background:  var(--store-primary) !important;
  border-color:  var(--store-primary) !important;
}

.btn {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  transition: .2s;

  &:hover {
    border-radius: 8px;
  }
}

</style>