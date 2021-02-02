<template>
  <div>
    <settings-company title="Flyer-Customizer">
      <div slot="body">

        <settings-group label="Logo auswählen" description="Ihr Firmenname">
          <div slot="input" class="col-md-7">
            <input @change="processFile($event)" type="file" class="form-control-file">
          </div>
        </settings-group>

        <settings-group label="Hauptfarbe" description="Die Hauptfarbe sollte dem Farbschema Ihres Logos entsprechen.">
          <div slot="input" class="col-md-7 text-left">
            <input type="color" value="#ff0000">
          </div>
        </settings-group>

        <settings-group label="Layout" description="Wählen Sie das Layout aus, in dem der Flyer erstellt werden soll.">
          <div slot="input" class="col-md-7 text-left">
            <input type="radio" name="gender" class="sr-only" id="male">
            <label for="male">
              <img src="http://findicons.com/files/icons/1688/web_blog/48/user_male_white_red_brown.png" alt="male">
            </label>
            <input type="radio" name="gender" class="sr-only" id="female">
            <label for="female">
              <img src="http://findicons.com/files/icons/1688/web_blog/48/user_female_white_pink_black.png"
                   alt="female">
            </label>
          </div>
        </settings-group>

        <settings-group label="Text" description="Schreiben Sie einen kurzen Text mit dem Sie Ihre App bewerben wollen.">
          <div slot="input" class="col-md-7 text-left">
            <input v-model="text">
          </div>
        </settings-group>

        <button @click="createPDF" class="btn btn-primary">PDF erstellen</button>

      </div>
    </settings-company>
  </div>
</template>

<script>
import JsPDF from 'jspdf'
import qrcode from 'qrcode-generator'
import SettingsCompany from "@/components/SettingsCompany"
import SettingsGroup from "@/components/SettingsGroup";


export default {
  name: "Flyer",
  components: {SettingsGroup, SettingsCompany},
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
      doc.text(this.text, 100, 100)

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