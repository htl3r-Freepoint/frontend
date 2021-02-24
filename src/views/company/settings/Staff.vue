<template>
  <div>
    <div class="table-responsive">
      <table class="table text-left table-hover">
        <thead class="thead-light">
        <tr>
          <th><font-awesome-icon icon="user"/> Mitarbeiter</th>
          <th><font-awesome-icon icon="envelope"/> Email</th>
          <th><font-awesome-icon icon="scroll"/> Rolle</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(staffMember, id) in staff" :key="id">
          <td>{{ staffMember.name }}</td>
          <td>{{ staffMember.email }}</td>
          <td>
            <select class="form-control table-role" v-model="staffMember.role">
            <option>Member</option>
            <option>Verwalter</option>
            <option>Owner</option>
          </select>
          </td>
          <td v-if="staffMember.role !== 'Owner'">
            <button class="btn btn-danger" @click="removestaff(staffMember)">
              <font-awesome-icon icon="trash"/>
            </button>
          </td>
          <td v-else>
          </td>
        </tr>
        </tbody>
      </table>
    </div>


    <div class="row add-staff">
      <fp-input class="col-md">
        <font-awesome-icon slot="prepend" icon="envelope"/>
        <input type="email" class="form-control" v-on:keydown.enter="addStaff" v-model="newUserEmail" placeholder="User Email">
      </fp-input>

      <fp-input class="col-md"
                description="Mit den Rollen vergeben Sie den Mitarbeitern Rechte. Ein Member darf nur Rabatte
                scannen, ein Verwalter darf Rabatte scannen, löschen und bearbeiten und der Owner darf zusätzlich das
                Geschäft löschen.">
        <font-awesome-icon slot="append" icon="scroll"/>
        <select class="form-control" v-model="newUserRole">
          <option disabled value="">Rolle auswählen</option>
          <option value="0">Mitarbeiter</option>
          <option value="1">Verwalter</option>
          <option value="3">Owner</option>
        </select>
      </fp-input>
    </div>
    <button class="btn btn-info" @click="addStaff"><font-awesome-icon icon="user-plus"/> Mitarbeiter Hinzufügen</button>


  </div>
</template>

<script>
import FpInput from "@/components/Form Components/FpInput";
import Axios from "axios";

import {library} from "@fortawesome/fontawesome-svg-core";
import {faTrash, faEnvelope, faUser, faScroll, faUserPlus} from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faEnvelope, faUser, faScroll, faUserPlus)

export default {
  name: "Staff",
  components: {FpInput},
  data() {
    return {
      staff: [
        {
          id: 0,
          name: 'Mario Seidl',
          email: 'seidl.mario@outlook.at',
          role: 'Owner'
        },
        {
          id: 1,
          name: 'Kristian Kraljevic',
          email: 'kraljevic.kristian@gmail.com',
          role: 'Member'
        },
        {
          id: 1,
          name: 'Kristian Kraljevic',
          email: 'kraljevic.kristian@hotmail.com',
          role: 'Member'
        }
      ],
      newUserEmail: '',
      newUserRole: ''
    }
  },
  created() {
    Axios.get(this.$store.state.url + "/staff", {
      token: this.$store.state.token,
      companyName: this.companyName
    }).then(response => {
      console.debug(response)
      this.staff = response.data.staff
    })
  },
  methods: {
    addStaff() {
      Axios.post(this.$store.state.url + "/staff", {
        token: this.$store.state.token,
        companyName: this.companyName,
        email: this.newUserEmail,
        role: this.newUserRole
      }).then(response => {
        console.debug(response)
      }).catch(error => {
        console.error(error)
      })
      this.newUserEmail = ''
    },
    removestaff(member) {
      Axios.delete(this.$store.state.url + "/staff", {
        token: this.$store.state.token,
        companyName: this.companyName,
        id: member.id
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
.table-role{
  min-width: 6em;
}

.add-staff {
  margin-top: 3em;
}

@media (min-width: 561px) {
  .add-staff {
    margin: 3em 2em 0em;
  }
}


</style>