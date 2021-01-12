<template>
  <div class="coupon">
    <div class="card">
      <div class="card-body text-left col">

        <h4 class="card-title font-weight-bold">{{ this.coupon.title }}</h4>

        <p>{{ this.coupon.text }}</p>

        <div class="row">
          <div class="col-6 text-left">
            <h4 class="font-weight-bold">{{
                coupon.isPercent ?
                    !(this.coupon.percentage > 0) || this.coupon.percentage >= 100 ?
                        'Gratis' : this.coupon.percentage + '%'
                    :
                    !(this.coupon.price > 0) || this.coupon.price >= 100 ?
                        'Gratis' : '-' + this.coupon.price + '€'
              }}</h4>
          </div>

          <div class="col-6 text-right">
            <h4 class="primary-text font-weight-bold">{{ this.coupon.value + " FP" }}</h4>
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
  margin: var(--card-margin) 0 var(--card-margin);

  .edit-buttons {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: fit-content;
    right: -20px;
    top: -20px;
  }

  .card {
    transition: 0.3s;
    min-height: var(--card-height);

    &:hover {
      box-shadow: 12px 12px 20px 0 rgba(70, 70, 70, 0.15);
    }
  }

  .card-image-overlay span {
    display: inline-block;
  }
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