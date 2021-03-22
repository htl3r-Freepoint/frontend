<template>
  <div class="coupon">
    <div class="card" v-on:click="showActionModal">
      <div class="card-body text-left d-flex flex-column justify-content-between pb-1">
        <div>
          <h4 class="font-weight-bold">{{ this.coupon.title }}</h4>
          <p>{{ this.coupon.text }}</p>
        </div>

        <footer class="d-flex flex-row justify-content-between">
          <div>
            <h4 class="font-weight-bold text-nowrap">
              {{
                coupon.isPercent ?
                    !(this.coupon.percentage > 0) || this.coupon.percentage >= 100 ?
                        'Gratis' : '-' + this.coupon.percentage + '%'
                    :
                    !(this.coupon.price > 0) || this.coupon.price >= 100 ?
                        'Gratis' : '-' + this.coupon.price + '€'
              }}
            </h4>
          </div>
          <h4 class="primary-text font-weight-bold text-nowrap">{{ this.coupon.value + " " }} <font-awesome-icon icon="receipt"/></h4>
        </footer>

      </div>

      <div class="control-buttons" v-if="$slots.actionIcon">
        <button v-if="$slots.actionIcon" class="btn btn-primary btn-action"
                v-on:click="showActionModal">
          <slot name="actionIcon"></slot>
        </button>
      </div>

    </div>

    <modal :id="'modalActionCoupon' + coupon.id" v-if="$slots.modal">
      <slot name="modal"></slot>
    </modal>

  </div>
</template>

<script>
import {library} from "@fortawesome/fontawesome-svg-core";
import {faReceipt} from "@fortawesome/free-solid-svg-icons";

library.add(faReceipt)


import Modal from "@/components/Modal";

export default {
  name: "Coupon",
  components: {Modal},
  props: ['coupon'],
  methods: {
    showActionModal() {
      if(this.$store.state.user.token) this.$("#modalActionCoupon" + this.coupon.id).modal()
      else this.$router.push('/login')
    }
  }
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

    .btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      transition: .2s;
      border: none;

      & .btn-action {
        width: 50px;
        height: 50px;
        border-radius: 30px;
      }

      &:hover {
        border-radius: 8px;
      }
    }
  }

  .card {
    cursor: pointer;
    transition: 0.3s;
    height: 100%;
    width: 100%;
    border-bottom: var(--store-primary) solid 4px;
    border-radius: 5px 5px 2px 2px;

    .card-body {
      padding: .5em;
    }

    &:hover {
      box-shadow: 12px 12px 20px 0 rgba(70, 70, 70, 0.15);
      border-bottom: rgba(0, 0, 0, .3) solid 4px;
      transform: translateY(-4px);
    }

    &:active {
      outline: none;
    }

    &:focus {
      outline: none;
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

</style>