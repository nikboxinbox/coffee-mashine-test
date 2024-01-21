<template lang="pug">
div(v-if="isPendingOptions")   ИДЕТ ЗАГРУЗКА... 
div(v-else-if="errorMessage") {{ errorMessage }}
div(v-else) 
  h1 {{currentModel.title}}
  img(:src="currentModel.imgPath", alt="Кофемашина")
  select(v-model="selectSize")
    option(v-for="size in sizes" :key="size" :value="size") {{ size }}
  select(v-model="selectNumDrinks")
    option(v-for="numDrinks in numDrinks" :key="numDrinks" :value="numDrinks") {{ numDrinks }}
  button(@click=" cart.addToCart(currentModel.name)") Добавить в корзину
  router-link.router-link(to="/cart") Перейти в корзину
<router-view />
</template>

<script setup>
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '../stores/mainStore'

const store = useMainStore()

const { sizes, numDrinks, currentModel, isPendingOptions, errorMessage, cart } = storeToRefs(store)

const _selectSize = ref(currentModel.value.size ? currentModel.value.size : 'standart')
const _selectNumDrinks = ref(currentModel.value.numDrinks ? currentModel.value.numDrinks : 6)

const selectSize = computed({
  get: () => _selectSize.value,
  set: (value) => {
    _selectSize.value = value
    store.setCurrentModel(_selectSize.value, _selectNumDrinks.value)
  }
})

const selectNumDrinks = computed({
  get: () => _selectNumDrinks.value,
  set: (value) => {
    _selectNumDrinks.value = value
    store.setCurrentModel(_selectSize.value, _selectNumDrinks.value)
  }
})
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

button:active {
  background-color: rgb(8, 106, 63);
}
.router-link {
  border-radius: 5px;
}
</style>
