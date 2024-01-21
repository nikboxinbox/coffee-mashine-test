<template lang="pug">
.cart  
  h1  Корзина
  h2(v-if="!cart.listModels.length") нет выбранных позиций
  .cart__item(
    v-else 
    v-for="item in cart.listModels" 
    :key="item.name")
    span {{ item.title }}
    span {{ item.count }} шт
    button(@click="cart.addToCart(item.name)") Добавить
    button(@click="cart.removeFromCart(item.name)") Удалить

router-link.router-link(to="/") Назад
</template>

<script setup>
import { useMainStore } from '../stores/mainStore'

const { cart } = useMainStore()
</script>

<style scoped>

div {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 18px;
}

.cart__item {
  display: grid;
  grid-template-columns: 150px 1fr 100px 100px;
  grid-column-gap: 5px;
  margin-bottom: 5px;
}

span {
  margin-right: 10px;
  width: 100px;
}

button {
  padding: 5px;
  background-color: #4caf50;
  color: rgba(255, 254, 254, 0.786);
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

button:active {
  background-color: rgb(8, 106, 63);
}
.router-link {
  border-radius: 5px;
  display: block;
  margin-top: 10px;
  padding: 10px 0;
  text-align: center;
  font-size: 20px;
}
</style>
