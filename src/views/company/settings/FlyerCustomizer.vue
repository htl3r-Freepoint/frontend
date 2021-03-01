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
          <input type="radio" class="sr-only" name="layout" id="layout1" v-model="layout" value="0">
          <label for="layout1">
            <img src="../../../assets/flyer/Flyer-Layout-1-Vorschau.png" class="w-75">
          </label>
        </div>

        <div class="col">
          <input type="radio" class="sr-only" name="layout" id="layout2" v-model="layout" value="1">
          <label for="layout2">
            <img src="../../../assets/flyer/Flyer-Layout-2-Vorschau.png" class="w-75">
          </label>
        </div>

        <div class="col">
          <input type="radio" class="sr-only" name="layout" id="layout3" v-model="layout" value="2">
          <label for="layout3">
            <img src="../../../assets/flyer/Flyer-Layout-3-Vorschau.png" class="w-75">
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
      base64: undefined,
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
    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    },
    async processFile(event) {
      this.img = new Image()
      this.img.src = window.URL.createObjectURL(event.target.files[0])
      this.base64 = await this.toBase64(event.target.files[0])
    },
    processLocalFile(src) {
      let image = new Image()
      image.src = src
      let canvas, ctx, dataURL, base64;
      canvas = document.createElement("canvas");
      ctx = canvas.getContext("2d");
      canvas.width = image.width;
      canvas.height = image.height;
      console.log(image)
      ctx.drawImage(image, 0, 0);
      dataURL = canvas.toDataURL("image/png");
      console.log(dataURL)
      base64 = dataURL.replace(/^data:image\/png;base64,/, "");
      console.log(base64)
      return base64;
    }
    ,

    async createPDF() {
      let documentName = 'Flyer'
      let doc = new JsPDF('p', 'mm', [297, 210])
      let qr = qrcode(4, 'L')
      qr.addData(this.qrCodeURL)
      qr.make()
      doc.setFillColor(this.color)
      doc.rect(0, 0, 210, 297, 'F')

      doc.addImage(this.base64, 46.2, 17.3, 117.6, ((117.6 / this.img.width) * this.img.height))
      doc.text(this.text, 11.4, 83.9)

      if (this.layout == 0) {
        //doc.addImage(this.processLocalFile("../../assets/flyer/Flyer-Layout-1-Element.png"), 0, 202.6, 210, 94.4)
        doc.addImage(qr.createDataURL(), 27.7, 223.5, 54.8, 54.8)
        doc.save(documentName + '.pdf')
      }

      if (this.layout == 1) {
        //doc.addImage(this.processLocalFile("../../assets/flyer/Flyer-Layout-1-Element.png"), 0, 202.6, 210, 94.4)
        doc.addImage(qr.createDataURL(), 27.7, 223.5, 54.8, 54.8)
        doc.save(documentName + '.pdf')
      }

      if (this.layout == 2) {
        //doc.addImage(this.processLocalFile("../../assets/flyer/Flyer-Layout-1-Element.png"), 0, 202.6, 210, 94.4)
        doc.addImage(qr.createDataURL(), 27.7, 223.5, 54.8, 54.8)
        doc.save(documentName + '.pdf')
      }
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