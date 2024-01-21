export default class CoffeeMachine {
  _size
  _numDrinks
  _name
  _title
  _imgPath

  constructor(size, numDrinks) {
    this._size = size
    this._numDrinks = numDrinks
    this._name = `${size}_${numDrinks}`
    this._title = `${size[0].toUpperCase()}${size.slice(1)} ${numDrinks}`

    this._imgPath = `src/assets/mashine-img/${size}.jpeg`
  }

  get name() {
    return this._name
  }

  get title() {
    return this._title
  }

  get imgPath() {
    return this._imgPath
  }
}
