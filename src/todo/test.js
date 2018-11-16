function Car(brand) {
  this.brand = brand
  this.isMoving = false

  this.stop = function() {
    this.isMoving = false
  }
}

Car.prototype.move = function() {
  this.isMoving = true
}

const audi = new Car('Audi Q3')
console.log(audi)
