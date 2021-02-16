<template>
  <tr>
    <td class="text-left">{{ store.address }}</td>
    <td>
      <table class="col text-left">
        <tr>
          <th>Tag</th>
          <th>Zeit</th>
        </tr>
        <tr>
          <td>Montag</td>
          <td>{{ store.open.monday }}</td>
        </tr>
        <tr>
          <td>Dienstag</td>
          <td>{{ store.open.tuesday }}</td>
        </tr>
        <tr>
          <td>Mittwoch</td>
          <td>{{ store.open.wednesday }}</td>
        </tr>
        <tr>
          <td>Donnerstag</td>
          <td>{{ store.open.thursday }}</td>
        </tr>
        <tr>
          <td>Freitag</td>
          <td>{{ store.open.friday }}</td>
        </tr>
        <tr>
          <td>Samstag</td>
          <td>{{ store.open.saturday }}</td>
        </tr>
        <tr>
          <td>Sonntag</td>
          <td>{{ store.open.sunday }}</td>
        </tr>
      </table>
    </td>
    <td>
      <div class="edit-buttons">
        <button class="btn btn-primary mb-1" data-toggle="modal"
                :data-target="'#modalEditStore'+store.id">
          <i class="fas fa-pen"></i>
        </button>
        <button class="btn btn-danger mt-1">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </td>
    <modal :id="'modalEditStore' + store.id">
      <form-edit-store :store="store"></form-edit-store>
    </modal>
  </tr>
</template>

<script>
import Modal from "@/components/Modal";
import FormEditStore from "@/components/forms/FormEditStore";

export default {
  name: "store",
  components: {FormEditStore, Modal},
  props: ['store', 'editRights']
}
</script>

<style scoped>
.edit-buttons {
  display: flex;
  flex-direction: column;
  width: fit-content;
}
</style>