<template>
  <nav>
    <div class="nav-wrapper">
      <ul class="right hide-on-med-and-down">
        <li><router-link :to="{name: 'ClientsComponent'}">Клиенты</router-link>></li>
        <li><router-link :to="{name: 'Home'}">Заказы</router-link></li>
        <li><router-link :to="{name: 'ServicesComponent'}">Услуги</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "Navbar",
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
ul li {
  padding: 5px;
}
</style>
