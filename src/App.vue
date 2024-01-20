<template lang="pug">
div(v-if="isPendingOptions")   ИДЕТ ЗАГРУЗКА... 
div(v-else)
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
import { storeToRefs } from 'pinia'
import { useMainStore } from './stores/mainStore'
import CoffeeMashine from './utils/CoffeeMachine'

const { sizes, numDrinks, isPendingOptions } = storeToRefs(useMainStore())

const selectSize = ref(sizes.value ? sizes.value.length[0] : 'standart')
const selectNumDrinks = ref(numDrinks.value ? numDrinks.value.length[0] : 6)

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
