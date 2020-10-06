<template>
  <div>
    <label>
      <input v-model="title">
    </label>
    <button @click="createPDF">create PDF</button>

    <div id="qrcode"></div>
    <qrcode value="Hello, World!" :options="{ width: 200 }"></qrcode>
  </div>
</template>

<script>
import JsPDF from 'jspdf'

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
      doc.addImage(null, 15, 40, 180, 180)
      doc.save(documentName + '.pdf')
    }
  }
}
</script>

<style scoped>

</style>
