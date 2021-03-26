<template>
  <div>
    <div class="text-left mb-5">
      <h4>FAQ:</h4>
      <h5 class="info-headline">
        Wie funktioniert die App?
      </h5>
      <div>
        Die Applikation {{ $store.state.company.companyName }} wurde mithilfe von FreePoint erstellt. FreePoint übernimmt sowohl
        die
        Funktionalität als auch die Wartung dieser App. Das Geschäft {{ $store.state.company.companyName }} hat freie
        Entscheidungsmacht über die Rabatte und das Design.
      </div>
      <h5 class="info-headline">
        Wie entstand FreePoint?
      </h5>
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

.info-text {
  margin-bottom: 1em;
}
</style>