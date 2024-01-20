export default class CoffeeMachine {
  #size
  #numDrinks
  #name
  #title
  #imgPath

  constructor(size, numDrinks) {
    this.#size = size
    this.#numDrinks = numDrinks
    this.#name = `${size}_${numDrinks}`
    this.#title = `${size} ${numDrinks}`
    this.#imgPath = `src/assets/mashine-img/${size}.jpeg`
  }

  get name() {
    return this.#name
  }

  get title() {
    return this.#title
  }

  get imgPath() {
    return this.#imgPath
  }
}
