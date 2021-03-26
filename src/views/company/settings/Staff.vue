<template>
  <div>

    <form class="mb-2">
      <div class="row">
        <fp-input class="col-md" label="Email">
          <font-awesome-icon slot="prepend" icon="at"/>
          <input type="email" class="form-control" v-on:keydown.enter="addStaff" v-model="newUserEmail"
                 placeholder="User Email">
        </fp-input>

        <fp-input class="col-md" label="Rolle"
                  description="Mit den Rollen vergeben Sie den Mitarbeitern Rechte. Ein Member darf nur Rabatte
                scannen, ein Verwalter darf Rabatte scannen, löschen und bearbeiten und der Owner darf zusätzlich das
                Geschäft löschen.">
          <font-awesome-icon slot="prepend" icon="scroll"/>
          <select class="form-control" v-model="newUserRole">
            <option disabled value="">Rolle auswählen</option>
            <option :value="1" :disabled="$store.state.user.rights < 2">Mitarbeiter</option>
            <option :value="2" :disabled="$store.state.user.rights < 3">Verwalter</option>
            <option :value="3" :disabled="$store.state.user.rights <= 3">Besitzer</option>
          </select>
        </fp-input>
      </div>

      <button type="button" class="btn btn-primary" @click="addStaff">
        <font-awesome-icon icon="user-plus"/>
        Mitarbeiter Hinzufügen
      </button>
    </form>

    <table class="table text-left table-hover table-responsive">
      <thead class="thead-light">
      <tr>
        <th>
          <font-awesome-icon icon="user"/>
          Mitarbeiter
        </th>
        <th>
          <font-awesome-icon icon="envelope"/>
          Email
        </th>
        <th>
          <font-awesome-icon icon="scroll"/>
          Rolle
        </th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(staffMember, id) in staff" :key="id">
        <td v-if="staffMember.name" class="text-wrap">{{ staffMember.name }}</td>
        <td v-else class="text-info">Nutzer hat keinen Namen angegeben</td>
        <td>{{ staffMember.email }}</td>
        <td>
          <select class="form-control table-role" :disabled="staffMember.role > $store.state.user.rights" v-model="staffMember.role">
            <option :value="1" :disabled="$store.state.user.rights < 2">Mitarbeiter</option>
            <option :value="2" :disabled="$store.state.user.rights < 3">Verwalter</option>
            <option :value="3" :disabled="$store.state.user.rights !== 3">Besitzer</option>
          </select>
        </td>
        <td class="d-flex flex-row" v-if="staffMember.role <= $store.state.user.rights">
          <button type="button" class="btn btn-danger" @click="removeStaff(staffMember)">
            <font-awesome-icon icon="trash"/>
          </button>
          <button type="button" class="btn btn-info" @click="editStaff(staffMember)">
            <font-awesome-icon icon="check"/>
          </button>
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import FpInput from "@/components/Form Components/FpInput";

import {library} from "@fortawesome/fontawesome-svg-core";
import {faAt, faCheck, faEnvelope, faScroll, faTrash, faUser, faUserPlus} from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faEnvelope, faUser, faScroll, faUserPlus, faAt, faCheck)

export default {
  name: "Staff",
  components: {FpInput},
  data() {
    return {
      staff: [],
      staffEdit: [],
      newUserEmail: '',
      newUserRole: ''
    }
  },
  created() {
    this.getStaff()
  },
  methods: {
    getStaff() {
      this.$http.post(this.$store.state.url + "/getMitarbeiter", {
        hash: this.$store.state.user.token,
        companyName: this.$store.state.company.companyName
      }).then(response => {
        console.debug(response)
        this.staff = response.data
        this.staffEdit = response.data
      })
    },
    addStaff() {
      this.$http.post(this.$store.state.url + "/addMitarbeiter", {
        hash: this.$store.state.user.token,
        companyName: this.$store.state.company.companyName,
        email: this.newUserEmail,
        role: this.newUserRole
      }).then(response => {
        console.debug(response)
        this.getStaff()
      })
      this.newUserEmail = ''
    },
    // eslint-disable-next-line no-unused-vars
    editStaff(member) {
      console.debug(member)
      this.$http.post(this.$store.state.url + "/editMitarbeiter", {
        hash: this.$store.state.user.token,
        companyName: this.$store.state.company.companyName,
        email: member.email,
        role: member.role
      }).then(response => {
        console.debug(response)
        this.$http.post(this.$store.state.url + "/getUserRights",{
          hash: this.$store.state.user.token,
          companyName: this.$store.state.company.companyName
        }).then(response => {
          console.debug(response)
          this.$store.state.user.rights = response.data
        })
        this.getStaff()
      })
    },
    removeStaff(member) {
      this.$http.post(this.$store.state.url + "/removeMitarbeiter", {
        hash: this.$store.state.user.token,
        companyName: this.$store.state.company.companyName,
        email: member.email
      }).then(response => {
        console.debug(response)
        let index = this.staff.indexOf(member)
        if (index > -1) {
          this.staff.splice(index, 1);
        }
      }).catch(error => {
        console.error(error)
      })
    }
  }
}
</script>

<style scoped>
.table-role {
  min-width: 6em;
}


</style>