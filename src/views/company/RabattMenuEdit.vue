<template>
  <div class="container" id="rabatt-menu-edit">
    <div class="d-flex justify-content-between">
      <h2 class="text-uppercase font-weight-bold">
        {{ $store.state.company.companyName ? $store.state.company.companyName : "ERROR: no Company selected" }}
      </h2>
      <div class="d-flex justify-content-end">
        <router-link class="btn btn-primary" to="/">Zurück</router-link>
      </div>
    </div>

    <!--Coupons-->
    <div>
      <h2 class="text-left border-bottom">Gutscheine</h2>
      <div id="coupon-container" class="row justify-content-center py-2">
        <coupon-edit v-for="(coupon, id) in $store.state.coupons" v-bind:key="id"
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
    </div>

    <!--NEW-->
    <div v-if="$store.state.couponsNew.length > 0">
      <div class="d-flex flex-row justify-content-between border-bottom edit-headline">
        <h2 class="text-left">Neu</h2>
        <button @click="sendCouponArray(
            '/newCoupon', $store.state.couponsNew,'resetCouponNew'
              )" class="btn btn-primary">
          <font-awesome-icon icon="check"/>
        </button>
      </div>
      <div>
        <coupon v-for="(coupon, id) in $store.state.couponsNew" :key="id" :coupon="coupon"
                class="col-sm-6 col-md-4 col-xl-3"></coupon>
      </div>
    </div>

    <!--Edit-->
    <div v-if="$store.state.couponsEdit.length > 0">
      <div class="d-flex flex-row justify-content-between border-bottom edit-headline">
        <h2 class="text-left">
          Ändern
        </h2>
        <button @click="sendCouponArray(
            '/editCoupon', $store.state.couponsEdit,'resetCouponEdit'
            )" class="btn btn-primary">
          <font-awesome-icon icon="check"/>
        </button>
      </div>
      <div>
        <coupon v-for="(coupon, id) in $store.state.couponsEdit" :key="id" :coupon="coupon"
                class="col-sm-6 col-md-4 col-xl-3"></coupon>
      </div>
    </div>

    <!--Edit-->
    <div v-if="$store.state.couponsDelete.length > 0">
      <div class="d-flex flex-row justify-content-between border-bottom edit-headline">
        <h2 class="text-left">
          Löschen
        </h2>
        <button @click="sendCouponArray(
            '/deleteCoupon', $store.state.couponsDelete,'resetCouponDelete'
            )" class="btn btn-primary">
          <font-awesome-icon icon="check"/>
        </button>
      </div>
      <div>
        <coupon v-for="(coupon, id) in $store.state.couponsDelete" :key="id" :coupon="coupon"
                class="col-sm-6 col-md-4 col-xl-3"></coupon>
      </div>
    </div>

    <modal id="modalCreateNewCoupon" :title="'Neuer Coupon'">
      <form-new-coupon></form-new-coupon>
    </modal>

  </div>
</template>

<script>
import FormNewCoupon from "@/components/forms/FormNewCoupon";
import Modal from "@/components/Modal";
import CouponEdit from "@/components/CouponEdit";

import {library} from "@fortawesome/fontawesome-svg-core";
import {faCheck, faPen, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import Coupon from "@/components/Coupon";

library.add(faPlusCircle, faCheck, faPen)

export default {
  name: "RabattMenuEdit",
  components: {Coupon, CouponEdit, Modal, FormNewCoupon},
  created() {
    this.$store.commit('resetCouponAll')
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      console.debug('Company:', this.$store.state.company.companyName)
      this.$http.post(this.$store.state.url + "/getRabatt", {
        hash: this.$store.state.user.token,
        firmenname: this.$store.state.company.companyName
      }).then(response => {
        console.debug("Coupons:", response)
        this.$store.commit('setCoupons', response.data.coupons)
        this.editRights = response.data.editRights
      })
    },
    sendCouponArray(url, array, commitFunction) {
      if (array.length > 0) {
        this.$http.post(this.$store.state.url + url, {
          hash: this.$store.state.user.token,
          firmenname: this.$store.state.company.companyName,
          data: JSON.stringify(array)
        }).then(response => {
          console.debug(response)
          this.$store.commit(commitFunction)
          this.getData()
        })
      }
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

@media (max-width: 560px) {
  #rabatt-menu-edit {
    margin-bottom: 80px;
  }
}

.edit-headline{
  margin-top: 3em;
  border-color: var(--store-primary) !important;
  border-width: 3px !important;
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