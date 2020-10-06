<template>
  <div>
    <label>
      <input v-model="title">
    </label>
    <button @click="createPDF">create PDF</button>
  </div>
</template>

<script>
import JsPDF from 'jspdf'
import qrcode from 'qrcode-generator'

export default {
  name: "FlyerCustomizer",
  data: function () {
    return {
      company: "",
      text: "",
      qrCodeURL: "diplomarbeit.freepoint.at"
    };
  },
  methods: {
    createPDF: function () {
      let documentName = 'Flyer'
      let doc = new JsPDF()
      let qr = qrcode(4, 'L');
      qr.addData(this.qrCodeURL);
      qr.make();
      doc.addImage(qr.createDataURL(), 15, 40, 180, 180)
      doc.save(documentName + '.pdf')
    }
  }
}
</script>

<style scoped>

</style>
