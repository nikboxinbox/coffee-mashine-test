import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import Cart from '../utils/Cart'

export const useMainStore = defineStore('main', () => {
  // const options = ref(null)
  const sizes = ref(null)
  const numDrinks = ref(null)
  const cart = useStorage('cart', () => new Cart())

  const isPendingOptions = ref(false)

  const loadOptions = async () => {
    debugger

    try {
      isPendingOptions.value = true

      const response = await fetch('http://localhost:3000/options')
      const options = await response.json()
      sizes.value = options.sizes
      numDrinks.value = options.numDrinks
      return response
    } catch (error) {
      console.error('Ошибка при загрузке опций:', error)
    } finally {
      isPendingOptions.value = false
    }
  }

  loadOptions()

  return {
    sizes,
    numDrinks,
    isPendingOptions,
    cart
  }
})