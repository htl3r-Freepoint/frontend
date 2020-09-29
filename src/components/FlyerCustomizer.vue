<template>
  <div>
    <label>
      <input v-model="title">
    </label>
  </div>
</template>

<script>
import jsPDF from 'jspdf'

export default {
  name: "FlyerCustomizer",
  data: function () {
    return {
      company: "",
      text: ""
    };
  },
  methods:{
    createPDF: function (){
      let documentName = 'Flyer';
      let document = new jsPDF();
      document.text("", 10, 10)
      document.save(documentName + '.pdf')
    }
  }
}
</script>

<style scoped>

</style>
