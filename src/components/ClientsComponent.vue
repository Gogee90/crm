<template>
  <table class="responsive-table centered striped">
    <thead>
      <tr>
        <th>Клиент</th>
        <th>Телефон</th>
        <th>Адрес</th>
      </tr>
      <tr>
        <td><input placeholder="Клиент"></td>
        <td><input placeholder="Телефон"></td>
        <td><input placeholder="Адрес"></td>
        <td><i class="material-icons">add</i></td>
      </tr>
    </thead>

    <tbody>
      <tr v-for="data in this.$store.getters.getClients" :key="data.id">
        <td>{{data.client_name}}</td>
        <td>{{data.phone_number}}</td>
        <td>{{data.address}}</td>
        <td><i class="material-icons">edit</i><i class="material-icons">delete</i></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "ClientsComponent",
        data() {
            return {

            }
        },
        methods: {
            getClientsList() {
                axios.get('/clients/')
                  .then(result => {
                      this.$store.dispatch('asignClients', result.data)
                      console.log(this.$store.getters.getClients)
                  })
            }
        },
        mounted() {
            this.getClientsList()
        }
    }
</script>

<style scoped>

</style>
