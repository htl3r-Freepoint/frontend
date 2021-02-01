<template>
  <div>
    <settings title="Info">
      <div slot="body">
        <div class="text-left">Nutzungsbedingungen
          FAQ:
          Wie funktioniert die App?
          Die Applikation "Name der Geschäftsapp" wurde mithilfe von FreePoint erstellt. FreePoint übernimmt die
          Funktionalität als auch die Wartung dieser App. Das Geschäft "Name des Geschäftes" hat freie
          Entscheidungsmacht
          über die Rabatte und das Design.
          Wie entstand FreePoint?
          Freepoint entstand aus der Ideenschmiede vier junger Männer der HTL Rennweg Wien. Diese haben dieses Projekt
          im
          Rahmen ihrer Diplomarbeit umgesetzt. Nähere Informationen finden sie unter https://diplomarbeit.freepoint.at/
        </div>
      </div>
    </settings>
  </div>
</template>

<script>
import Settings from "@/components/Settings";

export default {
  name: "Info",
  components: {Settings}
}
</script>

<style scoped>
</style>