<template>
  <div class="container">
    <div class="d-flex justify-content-between pb-5 row">
      <h2 class="text-uppercase font-weight-bold col-sm  mt-3">
        {{ $store.state.company.companyName ? $store.state.company.companyName : "ERROR: no Company selected" }}
      </h2>
      <div class="d-flex justify-content-end col-sm mt-3">
        <div>
          <router-link class="btn btn-primary" to="/cashier" v-if="editRights > 0">
            <font-awesome-icon icon="qrcode"/>
          </router-link>
          <router-link class="btn btn-primary mx-2" to="/company/coupons/edit"
                       v-if="editRights === 2 || editRights === 3">
            <font-awesome-icon icon="pen"/>
          </router-link>
          <router-link class="btn btn-primary" to="/company/settings/profile"
                       v-if="editRights === 2 || editRights === 3">
            <font-awesome-icon icon="cog"/>
          </router-link>
        </div>
      </div>
    </div>

    <div id="coupon-container" class="row justify-content-center py-2">
      <coupon v-for="(coupon, id) in $store.state.coupons" v-bind:key="id"
              class="col-sm-6 col-md-4 col-xl-3"
              :coupon="coupon">
        <font-awesome-icon slot="actionIcon" style="position: absolute; left: 9.5px; top:10.5px" icon="shopping-cart"/>
        <div slot="modal" class="container">
          <h2>{{ coupon.title }}</h2>
          <p class="text-left">{{ coupon.text }}</p>
          <div class="d-flex flex-row justify-content-between w-50 m-auto">
            <h3 class="font-weight-bold">
              {{
                coupon.isPercent ?
                    !(coupon.percentage > 0) || coupon.percentage >= 100 ?
                        'Gratis' : '-' + coupon.percentage + '%'
                    :
                    !(coupon.price > 0) || coupon.price >= 100 ?
                        'Gratis' : '-' + coupon.price + '€'
              }}
            </h3>
            <h3 class="primary-text">
              {{ coupon.value }}
              <font-awesome-icon icon="receipt"/>
            </h3>
          </div>
          <div class="container">
            <div class="row control-buttons justify-content-between">
              <button type="button" class="col-5 btn btn-danger font-weight-bold" data-dismiss="modal">Zurück</button>
              <button type="button" class="col-5 btn btn-primary font-weight-bold" data-dismiss="modal"
                      @click="buyCoupon(coupon.id)" :disabled="$store.state.points < coupon.value">Kaufen
              </button>
            </div>
          </div>
        </div>
      </coupon>
    </div>

    <modal id="lastCoupon">
      <vue-qr-code :value="lastCoupon.code"/>
    </modal>

  </div>
</template>

<script>
import Coupon from "@/components/Coupon";
import Modal from '@/components/Modal'
import VueQrCode from 'vue-qrcode'

import {library} from "@fortawesome/fontawesome-svg-core";
import {faPen, faQrcode, faReceipt, faShoppingCart} from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faPen, faReceipt, faQrcode)

export default {
  name: "RabattMenu",
  components: {Coupon, Modal, VueQrCode},
  data() {
    return {
      editRights: 0,
      coupons: [],
      lastCoupon: {code: 'no Coupon Provided'}
    }
  },
  mounted() {
    this.getData()
    if (this.$store.state.tutorial.couponMenu) {
      this.$introJS.introJs().setOptions({
        steps: [
          {
            element: document.getElementById('title'),
            intro: 'Hier wird Ihnen der Firmenname angezeigt.'
          },
          {
            element: document.getElementById('coupon-container'),
            intro: 'Das sind alle verfügbaren Coupons der Firma ' + this.$store.state.companyName + ' Diese können In diesem Menü direkt gekauft werden.'
          }
        ]
      }).start()
      this.$store.commit('setTutorialCouponMenu', false)
    }
  },
  methods: {
    getData() {
      console.debug('Company:', this.$store.state.company.companyName)
      this.$http.post(this.$store.state.url + "/getRabatt", {
        hash: this.$store.state.user.token ? this.$store.state.user.token : undefined,
        firmenname: this.$store.state.company.companyName
      }).then(response => {
        console.debug("Coupons:", response)
        this.$store.commit('setCoupons', response.data.coupons)
        this.editRights = response.data.editRights
      })
    },
    buyCoupon(id) {
      this.$http.post(this.$store.state.url + "/buyCoupon", {
        hash: this.$store.state.user.token ? this.$store.state.user.token : undefined,
        firmenname: this.$store.state.company.companyName,
        rabattID: id
      }).then(result => {
        console.debug(result)
        this.$store.commit('setPoints', result.data.points)
        this.lastCoupon = result.data.coupon
        this.$("#lastCoupon").modal()
      })
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