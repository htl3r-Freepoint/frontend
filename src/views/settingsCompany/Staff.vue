<template>
  <div>
    <fp-input>
      <i slot="prepend" class="fas fa-plus"/>
      <input type="email" class="form-control" v-on:keydown.enter="addStaff" v-model="user" placeholder="User Email">
    </fp-input>

    <table class="col text-left">
      <tr>
        <th>Mitarbeiter</th>
        <th>Rolle</th>
        <th>Email</th>
      </tr>
      <tr v-for="(staffMember, id) in staff" :key="id">
        <td>{{ staffMember.name }}</td>
        <td>{{ staffMember.email }}</td>
        <td>{{ staffMember.role }}</td>
        <td v-if="staffMember.role !== 'Owner'">
          <button class="btn btn-danger" @click="removestaff(staffMember)">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    </table>
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
        }
      ],
      user: ''
    }
  },
  created() {
    Axios.get(this.$store.state.url +"/staff", {
      token: this.$store.state.token,
      companyName: this.companyName
    }).then(response => {
      console.debug(response)
      this.staff = response.data.staff
    })
  },
  methods:{
    addStaff(){
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
    removestaff(member){
      Axios.delete(this.$store.state.url + "/staff", {
        token:this.$store.state.token,
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

</style>