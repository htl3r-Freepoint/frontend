<template>
  <div>
    <fp-input label="Logo" description="Ihr Firmenlogo">
      <input @change="processFile($event)" type="file" class="form-control-file">
    </fp-input>

    <fp-input label="Hauptfarbe" description="Die Hauptfarbe sollte dem Farbschema Ihres Logos entsprechen.">
      <input @change="setColor($event)" type="color" :value="color.toString()" class="form-control">
    </fp-input>

    <fp-input label="Layout" description="Das Layout entscheidet das Aussehen des Flyers.">
      <div id="layoutSelect" class="row">
        <label class="col">
          <img src="@/assets/flyer/Flyer-Layout-1-Vorschau.png">
          <input type="radio" class="sr-only" v-model="layout" value="0">
        </label>
        <label class="col">
          <img src="@/assets/flyer/Flyer-Layout-2-Vorschau.png">
          <input type="radio" class="sr-only" v-model="layout" value="1">
        </label>
        <label class="col">
          <img src="@/assets/flyer/Flyer-Layout-3-Vorschau.png">
          <input type="radio" class="sr-only" v-model="layout" value="2">
        </label>
      </div>
    </fp-input>

    <fp-input label="Text">
      <textarea class="form-control" v-model="text" maxlength="300"></textarea>
    </fp-input>

    <button @click="createPDF" class="btn btn-primary">PDF erstellen</button>

  </div>
</template>

<script>
import JsPDF from 'jspdf'
import qrcode from 'qrcode-generator'
import FpInput from "../../../components/Form Components/FpInput";


export default {
  name: "Flyer",
  components: {FpInput},
  data: function () {
    return {
      company: "",
      text: "",
      qrCodeURL: "diplomarbeit.freepoint.at",
      img: undefined,
      base64: undefined,
      layout: 0,
      color: ''
    };
  },
  created() {
    this.color = this.$store.state.design.colorMain
  },
  methods: {
    setColor(event) {
      console.log(event.target.value)
      this.color = event.target.value
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
    },
    async createPDF() {
      let documentName = 'Flyer'
      let doc = new JsPDF('p', 'mm', [297, 210])
      let qr = qrcode(4, 'L')
      qr.addData(this.qrCodeURL)
      qr.make()
      doc.setFillColor(this.color)
      doc.rect(0, 0, 210, 297, 'F')

      if (this.layout === 0) {
        //doc.addImage(this.processLocalFile("../../assets/flyer/Flyer-Layout-1-Element.png"), 0, 202.6, 210, 94.4)
        doc.setFillColor(this.color)
        doc.rect(0, 0, 210, 297, 'F')
      }

      if (this.layout === 1) {
        //doc.addImage(this.processLocalFile("../../assets/flyer/Flyer-Layout-1-Element.png"), 0, 202.6, 210, 94.4)
        doc.addImage(qr.createDataURL(), 27.7, 223.5, 54.8, 54.8)
        doc.save(documentName + '.pdf')
      }

      if (this.layout === 2) {
        //doc.addImage(this.processLocalFile("../../assets/flyer/Flyer-Layout-1-Element.png"), 0, 202.6, 210, 94.4)
        doc.addImage(qr.createDataURL(), 27.7, 223.5, 54.8, 54.8)
        doc.save(documentName + '.pdf')
      }
    }
  }
}
</script>

<style scoped lang="scss">

#layoutSelect label {
  cursor: pointer;
  filter: grayscale(100%);
  align-items: center;
  &:hover {
    filter: grayscale(0);
  }
  & img {
    height: 8em;
  }
}

input[type="radio"]:checked + #layoutSelect label img {
  filter: grayscale(0);
}
</style>