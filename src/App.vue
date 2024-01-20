<template lang="pug">
div
  h1 {{currentMashine.title}} 
  img(:src="currentMashine.imgPath", alt="Кофемашина")
  select(v-model="selectSize")
    option(v-for="size in sizes" :key="size" :value="size") {{ size }}
  select(v-model="selectNumDrinks")
    option(v-for="numDrinks in numDrinks" :key="numDrinks" :value="numDrinks") {{ numDrinks }}
  button(@click="addToCart") Добавить в корзину
  router-link.router-link(to="/cart") Перейти в корзину
</template>

<script setup>
import { computed, ref } from 'vue'
import CoffeeMashine from './utils/CoffeeMachine'

const sizes = ['standart', 'large']
const numDrinks = [1, 2, 3, 4, 5]

const selectSize = ref(sizes[0])
const selectNumDrinks = ref(numDrinks[0])

const currentMashine = computed(() => new CoffeeMashine(selectSize.value, selectNumDrinks.value))
const addToCart = () => {
  console.log('Добавить')
}
</script>

<style scoped>
div {
  text-align: center;
  max-width: 220px;
  font-size: 18px;
  margin: auto;
  display: flex;
  flex-direction: column;
}

h1 {
  margin-bottom: 20px;
  text-transform: capitalize;
}

img {
  margin-bottom: 10px;
  width: 220px;
  height: 220px;
  object-fit: cover;
  border: 1px solid #ddd;
  border-radius: 5px;
}

select {
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 5px;

  /* font-size: 16px; */
}

button {
  padding: 10px 20px;
  margin-bottom: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.router-link {
  border-radius: 5px;
}
</style>
