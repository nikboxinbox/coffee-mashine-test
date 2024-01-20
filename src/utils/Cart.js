export class CoffeMashineCart {
  #storage = {}
 


  // TODO: Определиться какой вариант подходит более из списков
  get listModels() {
    const result = []

    for (const name in this.#storage) {
      const { count } = this.#storage[name]
      result.push({ name, count })
    }

    return result
  }

  get listMasines() {
    return Object.values(this.#storage)
  }

  addCoffeMashine(coffeMashine) {
    if (!this.#storage[coffeMashine.name]) {
      this.#storage[coffeMashine.name] = {
        coffeMashine,
        count: 1
      }
    } else {
      this.#storage[coffeMashine.name].count++
    }
  }

  removeCoffeMashine(name) {
    if (!this.#storage[name]) {
      console.error(name, `This ${name} is not in the cart !`)
    } else if (this.#storage[name].count === 1) {
      delete this.#storage[name]
    } else {
      this.#storage[name].count--
    }
  }
}
