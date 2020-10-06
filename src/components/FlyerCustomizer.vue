<template>
  <div class="container">
    <label for="beschreibung" class="row">Example file input</label>
    <input type="file" class="form-control-file, row" id="beschreibung">
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
        <img src="http://findicons.com/files/icons/1688/web_blog/48/user_female_white_pink_black.png" alt="female">
      </label>
    </fieldset>
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
