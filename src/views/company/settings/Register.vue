<template>
  <div>
    <div class="col">
      <qrcode-stream id="QRScanner" class="my-5" @decode="onDecode" @init="checkCamera"/>
      <transition name="fade" v-on:enter="enterError">
        <div class="alert alert-danger" v-if="error">
          {{ this.error }}
        </div>
      </transition>
      <transition name="fade" v-on:enter="enterSuccess">
        <div class="alert alert-success" v-if="success">
          Punkte erfolgreich zugewiesen
        </div>
      </transition>
    </div>
    <table class="col" v-if="registers.length > 0">
      <tr>
        <th>Kassa ID</th>
        <th></th>
      </tr>
      <tr v-for="(register, id) in registers" :key="id">
        <td>{{ register.Bezeichnung }}</td>
        <td>
          <button class="btn btn-danger" @click="deleteRegister(register)">
            <font-awesome-icon icon="trash"/>
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import {QrcodeStream} from 'vue-qrcode-reader'
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

library.add(faTrash)

export default {
  name: "Register",
  components: {QrcodeStream},
  data() {
    return {
      registers: [],
      regex: new RegExp("_?R\\d-AT\\d_(.+)_(.+)_(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2})_(\\d+,\\d{2})_(\\d+,\\d{2})_(\\d+,\\d{2})_(\\d+,\\d{2})_(\\d+,\\d{2})_(.+)={1,2}_(.+)=="),
      error: undefined,
      success: undefined
    }
  },
  created() {
    this.getRegisters()
  },
  methods: {
    onDecode(result) {
      navigator.vibrate(100)
      this.postData(result)
    },
    postData(code) {
      if (this.regex.exec(code)) {
        console.debug(code)
        this.$http.post(this.$store.state.url + '/addRegister', {
          hash: this.$store.state.user.token,
          companyName: this.$store.state.company.companyName,
          qrcode: code
        }).then(result => {
          console.debug(result)
          this.getRegisters()
        }).catch(error => {
          console.error(error)
          this.error = error
        })
      } else {
        console.error("Qrcode is invalid")
      }
    },
    deleteRegister(register){
      this.$http.post(this.$store.state.url + '/deleteRegister', {
        hash: this.$store.state.user.token,
        companyName: this.$store.state.company.companyName,
        id: register.id
      }).then(result => {
        console.debug(result)
        this.getRegisters()
      })
    },
    getRegisters(){
      this.$http.post(this.$store.state.url + '/getRegisters', {
        hash: this.$store.state.user.token,
        companyName: this.$store.state.company.companyName
      }).then(result => {
        console.debug(result)
        this.registers = result.data
      })
    },
    async checkCamera(promise) {
      try {
        await promise
      } catch (error) {
        this.error = error
        console.error(error)
      }
    },
    enterError() {
      setTimeout(() => {
        this.error = undefined;
      }, 3000);
    },
    enterSuccess() {
      setTimeout(() => {
        this.success = false;
      }, 3000);
    }
  }
}
</script>

<style scoped>

#QRScanner {
  max-width: 500px;
  margin: auto;
  border: 5px solid;
  padding: 10px;
  border-color: var(--store-primary);
  border-radius: 10px;
}

.alert {
  width: fit-content;
  margin: auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}

.fade-enter, .fade-leave-to {
  opacity: 0
}

</style>