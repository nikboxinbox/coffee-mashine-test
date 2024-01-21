import {  ref } from 'vue'
import { defineStore } from 'pinia'
import Cart from '../utils/Cart'

export const useMainStore = defineStore('main', () => {
  const sizes = ref(null)
  const numDrinks = ref(null)
  const cart = ref(new Cart())

  const errorMessage = ref(null)
  const isPendingOptions = ref(false)

  const fetchOptions = async () => {

    try {
      isPendingOptions.value = true

      const response = await fetch('http://localhost:3000/options')
      const options = await response.json()
      sizes.value = options.sizes
      numDrinks.value = options.numDrinks
    } catch (error) {
      errorMessage.value = 'Ошибка при загрузке  данных c сервера!'
      console.error(errorMessage, error)
    } finally {
      isPendingOptions.value = false
    }
  }

  fetchOptions()

  return {
    sizes,
    numDrinks,
    cart,
    isPendingOptions,
    errorMessage
  }
})
