<template>

  <form>
    <fp-input label="Logo"
        description="Laden Sie hier ihr eigenes Logo hoch. Alternativ wird einfach ihr Firmenname Angezeigt.">
      <i slot="prepend" class="fas fa-image"></i>
      <input type="file" @change="onFileChange" accept="image/*">
    </fp-input>

    <fp-input
        description="Ihr Firmenname ist dafür da, ihr Unternehmen zu finden, wir empfehlen nicht diesen zu ändern, außer es ist absolut nötig.">
      <i slot="prepend" class="fas fa-user"/>
      <input type="text" class="form-control" v-model="companyName" placeholder="Firmenname">
    </fp-input>

    <fp-input description="Ihre Kontakt-Email ist für alle Kunden sichtbar">
      <i slot="prepend" class="fas fa-at"/>
      <input type="email" class="form-control" v-model="email" placeholder="Kontact Email">
    </fp-input>

    <fp-input description="Dieser Wert bestimmt, wie viel € einen Punkt wert ist.">
      <span slot="prepend">1 FP</span>
      <input type="number" min="1" class="form-control" v-model="exchangeRate">
      <i slot="append" class="fas fa-euro-sign"/>
    </fp-input>

    <button type="submit" class="btn btn-primary">Speichern</button>
  </form>

</template>

<script>
import FpInput from "@/components/Form Components/FpInput";
import Axios from "axios";

export default {
  name: "Profile",
  components: {FpInput},
  data() {
    return {
      logo: '',
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
.settings-group {
  padding-bottom: 1.5em;
}

.settings-label {
  font-weight: bold;
}

.settings-small {
  font-size: small;
  color: grey;
}
</style>