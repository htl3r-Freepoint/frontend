<template>

  <form>
    <div id="preview">
      <img v-if="url" :src="url" />
    </div>

    <fp-input label="Logo"
        description="Laden Sie hier ihr eigenes Logo hoch. Alternativ wird einfach ihr Firmenname Angezeigt.">
      <font-awesome-icon slot="prepend" icon="image"/>
      <input type="file" @change="onFileChange" accept="image/*">
    </fp-input>


    <fp-input label="Firmenname"
        description="Ihr Firmenname ist dafür da, ihr Unternehmen zu finden, wir empfehlen nicht diesen zu ändern, außer es ist absolut nötig.">
      <font-awesome-icon slot="prepend" icon="sign"/>
      <input type="text" class="form-control" v-model="companyName" placeholder="Firmenname">
    </fp-input>

    <fp-input label="Kontakt Email"
        description="Ihre Kontakt-Email ist für alle Kunden sichtbar">
      <font-awesome-icon slot="prepend" icon="envelope"/>
      <input type="email" class="form-control" v-model="email" placeholder="Kontakt Email">
    </fp-input>

    <fp-input label="Tauschrate"
        description="Dieser Wert bestimmt, wie viel € einen Punkt wert ist.">
      <font-awesome-icon slot="prepend" icon="receipt"/>
      <input type="number" min="1" class="form-control text-right" v-model="exchangeRate">
      <font-awesome-icon slot="append" icon="euro-sign"/>
    </fp-input>

    <button type="submit" class="btn btn-primary"  @click="saveChanges">Speichern</button>
  </form>

</template>

<script>
import FpInput from "@/components/Form Components/FpInput";

import {library} from "@fortawesome/fontawesome-svg-core";
import {faImage, faSign, faEnvelope, faEuroSign, faReceipt} from "@fortawesome/free-solid-svg-icons";

library.add(faImage, faSign, faEnvelope, faEuroSign, faReceipt)

export default {
  name: "Profile",
  components: {FpInput},
  data() {
    return {
      logo: '',
      url: '',
      companyName: '',
      email: '',
      exchangeRate: 1
    }
  },
  created() {
    this.$http.post(this.$store.state.url + "/getCompany", {
      hash: this.$store.state.user.token
    }).then(response => {
      console.debug("Response:", response.data)
      this.companyName = response.data.companyName
      this.email = response.data.contactMail
      this.exchangeRate = response.data.conversionRate
    })
  },
  methods: {
    onFileChange(event) {
      this.logo = event.target.files[0]
      this.url = URL.createObjectURL(this.logo)
      this.$store.commit('setLogo', this.url)
    },
    saveChanges() {
      this.$http.post(this.$store.state.url + "/changeCompany", {
        token: this.$store.state.token,
        logo: this.logo,
        companyName: this.companyName,
        email: this.email,
        exchangeRate: this.exchangeRate
      }).then(response => {
        console.debug(response)
      }).catch(error => {
        console.error(error)
      })
    }
  }
}
</script>

<style scoped>
#preview {
  display: flex;
  justify-content: left;
  align-items: center;
}

#preview img {
  max-width: 200px;
}
</style>