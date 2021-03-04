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
      <span slot="prepend">1 FP =</span>
      <input type="number" min="1" class="form-control text-right" v-model="exchangeRate">
      <font-awesome-icon slot="append" icon="euro-sign"/>
    </fp-input>

    <button type="submit" class="btn btn-primary">Speichern</button>
  </form>

</template>

<script>
import FpInput from "@/components/Form Components/FpInput";
import Axios from "axios";

import {library} from "@fortawesome/fontawesome-svg-core";
import {faImage, faSign, faEnvelope, faEuroSign} from "@fortawesome/free-solid-svg-icons";

library.add(faImage, faSign, faEnvelope, faEuroSign)

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
    Axios.get(this.$store.state.url + "/changeFirma", {
      token: this.$store.state.token,
      companyName: ''
    })
  },
  methods: {
    onFileChange(event) {
      this.logo = event.target.files[0]
      this.url = URL.createObjectURL(this.logo)
    },
    saveChanges() {
      Axios.post(this.$store.state.url + "/changeFirma", {
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