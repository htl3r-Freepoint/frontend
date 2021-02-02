<template>
  <div>
    <settings-user title="Info">
      <div slot="body">
        <div class="text-left faq">
          <h5>FAQ:</h5>
          <div class="faq-headline">
            Wie funktioniert die App?
          </div>
          <div class="faq-text">
            Die Applikation "Name der Geschäftsapp" wurde mithilfe von FreePoint erstellt. FreePoint übernimmt sowohl
            die
            Funktionalität als auch die Wartung dieser App. Das Geschäft "Name des Geschäftes" hat freie
            Entscheidungsmacht
            über die Rabatte und das Design.
          </div>
          <div class="faq-headline">
            Wie entstand FreePoint?
          </div>
          <div class="faq-text">
            Freepoint entstand aus der Ideenschmiede vier junger Männer der HTL Rennweg Wien. Diese haben dieses Projekt
            im
            Rahmen ihrer Diplomarbeit umgesetzt. Nähere Informationen finden Sie unter diesem
            <a href="https://diplomarbeit.freepoint.at/">Link</a>.
          </div>
        </div>
        <div class="text-left terms">
          <router-link to="/terms-and-service">Nutzungsbedingungen</router-link>
        </div>
      </div>
    </settings-user>
  </div>
</template>

<script>
import SettingsUser from "@/components/SettingsUser";

export default {
  name: "Info",
  components: {SettingsUser}
}
</script>

<style scoped>
.terms {
  margin-bottom: 2em;
}

.faq {
  margin-bottom: 3em;
}

.faq-headline {
  font-weight: bold;
  margin-top: 1em;
}

.faq-text {
  margin-bottom: 1em;
}

</style>