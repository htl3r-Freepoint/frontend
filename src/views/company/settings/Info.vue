<template>
  <div>
    <div class="text-left mb-5">
      <h5>FAQ:</h5>
      <div class="info-headline">
        Wie funktioniert die App?
      </div>
      <div>
        Die Applikation "Name der Geschäftsapp" wurde mithilfe von FreePoint erstellt. FreePoint übernimmt sowohl
        die
        Funktionalität als auch die Wartung dieser App. Das Geschäft "Name des Geschäftes" hat freie
        Entscheidungsmacht
        über die Rabatte und das Design.
      </div>
      <div class="info-headline">
        Wie entstand FreePoint?
      </div>
      <div>
        Freepoint entstand aus der Ideenschmiede vier junger Männer der HTL Rennweg Wien. Diese haben dieses Projekt
        im
        Rahmen ihrer Diplomarbeit umgesetzt. Nähere Informationen finden Sie unter diesem
        <a href="https://diplomarbeit.freepoint.at/">Link</a>.
      </div>
    </div>

    <div class="text-left">
      <h5>Rechtliches:</h5>
      <div>
        <router-link to="/imprint">Impressum</router-link>
      </div>
      <div>
        <router-link to="/terms-and-service-company">Nutzungsbedingungen</router-link>
      </div>
      <div>
        <router-link to="/privacy-policy">Datenschutzerklärung</router-link>
      </div>
    </div>


  </div>
</template>

<script>

export default {
  name: "Info",
  components: {}
}
</script>

<style scoped>

.info-headline {
  font-weight: bold;
  margin-top: 1em;
}

</style>