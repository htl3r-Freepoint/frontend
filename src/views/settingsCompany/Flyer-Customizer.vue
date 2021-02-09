<template>
  <div>

    <settings-group label="Logo auswählen" description="Ihr Firmenname">
      <div slot="input" class="col-md-7">
        <input @change="processFile($event)" type="file" class="form-control-file">
      </div>
    </settings-group>

    <settings-group label="Hauptfarbe" description="Die Hauptfarbe sollte dem Farbschema Ihres Logos entsprechen.">
      <div slot="input" class="col-md-7 text-left">
        <input @change="setColor($event)" type="color" :value="color.toString()">
      </div>
    </settings-group>

    <settings-group label="Layout" description="Wählen Sie das Layout aus, in dem der Flyer erstellt werden soll.">
      <div slot="input" class="col-md-7 text-left row">

        <div class="col">
          <input type="radio" class="sr-only" name="layout" id="layout1">
          <label for="layout1">
            <img src="../../assets/flyer_layout_preview/Flyer-Layout-1-Vorschau-Color.png" class="w-50">
          </label>
        </div>

        <div class="col">
          <input type="radio" class="sr-only" name="layout" id="layout2">
          <label for="layout2">
            <img src="../../assets/flyer_layout_preview/Flyer_Layout_1_-_Vorschau.svg" class="w-50">
          </label>
        </div>


      </div>
    </settings-group>

    <settings-group label="Text" description="Schreiben Sie einen kurzen Text mit dem Sie Ihre App bewerben wollen.">
      <div slot="input" class="col-md-7 text-left">
        <input v-model="text" maxlength="300">
      </div>
    </settings-group>

    <button @click="createPDF" class="btn btn-primary">PDF erstellen</button>

  </div>
</template>

<script>
import JsPDF from 'jspdf'
import qrcode from 'qrcode-generator'
import SettingsGroup from "@/components/SettingsGroup";


export default {
  name: "Flyer",
  components: {SettingsGroup},
  data: function () {
    return {
      company: "",
      text: "",
      qrCodeURL: "diplomarbeit.freepoint.at",
      img: undefined,
      layout: undefined,
      color: ''
    };
  },
  methods: {
    setColor(event) {
      console.log(event.target.value)
      this.color = event.target.value
      this.$store.commit('setColorMain', this.color)
      document.querySelector(':root').style.setProperty(
          '--flyer-color',
          this.$store.state.design.colorMain
      )
    },
    processFile(event) {
      this.img = event.target.files[0]
      console.log(this.img)
    },

    createPDF: function () {
      let documentName = 'Flyer'
      let doc = new JsPDF
      let qr = qrcode(4, 'L')
      qr.addData(this.qrCodeURL)
      qr.make()
      doc.addImage(qr.createDataURL(), 0, 0, 80, 80)
      doc.addImage("", 0, 0, 210, 297)

      doc.text(this.text, 100, 100)

      doc.save(documentName + '.pdf')
    }
  }
}
</script>

<style scoped>
.cls-1{
  color: var(--flyer-color);
}

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