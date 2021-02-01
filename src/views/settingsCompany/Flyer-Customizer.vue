<template>
  <div>
    <settings-company title="Flyer-Customizer">
      <div slot="body">
        <div class="container">
          <input @change="processFile($event)" type="file" class="form-control-file, row" id="beschreibung">
          <label for="color-picker">Select your favorite color:</label>
          <input type="color" id="color-picker" value="#ff0000"><br><br>
          <fieldset>
            <legend>
              Please select gender
            </legend>
            <input type="radio" name="gender" class="sr-only" id="male">
            <label for="male">
              <img src="http://findicons.com/files/icons/1688/web_blog/48/user_male_white_red_brown.png" alt="male">
            </label>
            <input type="radio" name="gender" class="sr-only" id="female">
            <label for="female">
              <img src="http://findicons.com/files/icons/1688/web_blog/48/user_female_white_pink_black.png"
                   alt="female">
            </label>
          </fieldset>
          <label>
            <input v-model="title">
          </label>
          <button @click="createPDF">create PDF</button>
        </div>
      </div>
    </settings-company>
  </div>
</template>

<script>
import JsPDF from 'jspdf'
import qrcode from 'qrcode-generator'
import SettingsCompany from "@/components/SettingsCompany"


export default {
  name: "Flyer",
  components: {SettingsCompany},
  data: function () {
    return {
      company: "",
      text: "",
      qrCodeURL: "diplomarbeit.freepoint.at",
      someData: undefined
    };
  },
  methods: {
    processFile(event) {
      this.someData = event.target.files[0]
      console.log(this.someData)
    },

    createPDF: function () {
      let documentName = 'Flyer'
      let doc = new JsPDF
      let qr = qrcode(4, 'L')
      qr.addData(this.qrCodeURL)
      qr.make()
      doc.addImage(qr.createDataURL(), 15, 40, 80, 80)
      doc.text("hallo", 100, 100)

      doc.save(documentName + '.pdf')
    }
  }
}
</script>

<style scoped>
label {
  cursor: pointer;
  filter: grayscale(100%);
}

label:hover {
  filter: grayscale(0);
}

input[type="radio"]:checked + label {
  filter: grayscale(0);
}
</style>