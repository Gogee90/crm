<template>
  <table class="responsive-table centered striped">
    <thead>
      <tr>
          <th>Номер заказа</th>
          <th>Стоимость</th>
          <th>Статус</th>
          <th>Дата заказа</th>
          <th>Клиент</th>
          <th>Исполнитель</th>
          <th>Услуги</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="data in this.$store.getters.getOrders" :key="data.id">
        <td>#{{data.id}}</td>
        <td>{{data.price}}</td>
        <td v-if="data.status == 'Не оплачен'"><p class="not-paid">{{data.status}}</p></td>
        <td v-else-if="data.status == 'Оплачен'"><p class="paid">{{data.status}}</p></td>
        <td v-else-if="data.status == 'Поступил(а'"><p class="new">{{data.status}}</p></td>
        <td v-else-if="data.status == 'Готов'"><p class="ready">{{data.status}}</p></td>
        <td v-else><p class="else">{{data.status}}</p></td>
        <td>{{data.order_date}}</td>
        <td>{{data.client}}</td>
        <td>{{data.executioner}}</td>
        <td><p v-for="order_name in data.order" :key="order_name.id">{{order_name.service_name}}</p></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "MainContent",
        data() {
            return {

            }
        },
        methods: {
            getData() {
                axios.get('/orders/')
                  .then(result => {
                      this.$store.dispatch('asignOrders', result.data)
                  })
            }
        },
        mounted() {
            this.getData()
        }
    }
</script>

<style>
table {
  font-family: Roboto;
}

.paid {
  background-color: lightgreen;
}

.not-paid {
  background-color: red;
}

.new {
  background-color: cornflowerblue;
}

.ready {
  background-color: lightgray;
}

.else {
  background-color: yellow;
}
</style>
