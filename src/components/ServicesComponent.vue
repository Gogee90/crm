<template>
  <table class="responsive-table centered striped">
    <thead>
      <tr>
        <th>Услуги</th>
        <th>Цена</th>
      </tr>
      <tr>
        <td><input placeholder="Услуги"></td>
        <td><input placeholder="Цена"></td>
        <td><i class="material-icons">add</i></td>
      </tr>
    </thead>

    <tbody>
      <tr v-for="data in this.$store.getters.getServices" :key="data.id">
        <td>{{data.service_name}}</td>
        <td>{{data.price}}</td>
        <td><i class="material-icons">edit</i><i class="material-icons">delete</i></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import axios from 'axios'
    export default {
      name: "ServicesComponent",
      data() {
            return {

            }
        },
        methods: {
            getServiceList() {
                axios.get('/services/')
                  .then(result => {
                      this.$store.dispatch('asignServices', result.data)
                  })
            }
        },
        mounted() {
            this.getServiceList()
        }
    }
</script>

<style scoped>

</style>
