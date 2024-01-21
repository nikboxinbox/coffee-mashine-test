export default class CoffeMashineCart {
  
  _storage = {}

  get storage() {
    return this._storage
  }

  addToCart(name) {
    if (!this._storage[name]) {
      this._storage[name] = { name, count: 1 }
    } else {
      this._storage[name].count++
    }
  }

 
  removeFromCart(name) {
    if (!this._storage[name]) {
      console.error(name, `This ${name} is not in the cart !`)
    } else if (this._storage[name].count === 1) {
      delete this._storage[name]
    } else {
      this._storage[name].count--
    }
  }

  get listModels() {
    return Object.values(this._storage).map(({ name, count }) => ({
      name,
      title: name.replace(/_/g, ' '),
      count
    }))
  }
}
