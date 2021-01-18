<template>
  <table class="responsive-table centered striped">
    <thead>
      <tr>
        <th>Клиент</th>
        <th>Телефон</th>
        <th>Адрес</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="data in this.$store.getters.getClients" :key="data.id">
        <td>{{data.client_name}}</td>
        <td>{{data.phone_number}}</td>
        <td>{{data.address}}</td>
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
