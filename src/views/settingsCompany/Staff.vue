<template>
  <div>
    <div class="table-responsive">
      <table class="table text-left table-hover">
        <thead class="thead-light">
        <tr>
          <th>Member</th>
          <th>Rolle</th>
          <th>Email</th>
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
              <i class="fas fa-trash"></i>
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
        <i slot="prepend" class="fas fa-plus"/>
        <input type="email" class="form-control" v-on:keydown.enter="addStaff" v-model="user" placeholder="User Email">
      </fp-input>

      <fp-input class="col-md"
                description="Mit den Rollen vergeben Sie den Mitarbeitern Rechte. Ein Member darf nur Rabatte
                scannen, ein Verwalter darf Rabatte scannen, löschen und bearbeiten und der Owner darf zusätzlich das
                Geschäft löschen.">
        <select class="form-control">
          <option>Mitarbeiter</option>
          <option>Verwalter</option>
          <option>Owner</option>
        </select>
      </fp-input>

    </div>


  </div>
</template>

<script>

import FpInput from "@/components/Form Components/FpInput";
import Axios from "axios";

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
      user: ''
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
        email: this.user
      }).then(response => {
        console.debug(response)
      }).catch(error => {
        console.error(error)
      })
      this.user = ''
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