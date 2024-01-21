<template lang="pug">

h1 Корзина
div(v-for="item in cart.listModels" :key="item.name")
    span {{ item.title }} 
    span количество: {{ item.count }}
    button(@click="cart.addToCart(item.name)") Добавить
    button(@click="cart.removeFromCart(item.name)") Удалить
router-link.router-link(to="/") Назад


</template>
<script setup>
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '../stores/mainStore'

const { cart } = storeToRefs(useMainStore())

// const list = computed(() => cart.value.getListMashines())
</script>

<style scoped>
div {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  width: fit-content;
}

span {
  margin-right: 10px;
}

button {
  /* margin-top: 5px; */
  padding: 5px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 10px;
}

button:hover {
  background-color: #45a049;
}
.router-link {
  border-radius: 5px;
}
</style>
