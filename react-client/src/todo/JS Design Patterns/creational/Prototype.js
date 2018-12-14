/**
 * Прототип
 */
function Animal(type) {
  this.type = type

  this.clone = function() {
    return new Animal(this.type)
  }
}

/**
 * Concrete prototype, inherits from Prototype Animal
 */
function Cat() {
  Animal.apply(this, [ 'cat' ])
}

function Dog() {
  Animal.apply(this, [ 'dog' ])
}

// console.log(new Cat('bushy', 'Dymka'))

function AnimalMaker(animalType) {
  let counter = 0

  this.create = function() {
    counter++
    return animalType.clone()
  }

  this.getCounter = function() {
    return counter
  }
}

const cat = new Cat()
const catMaker = new AnimalMaker(cat)
const cat_1 = catMaker.create()
const cat_2 = catMaker.create()

const dog = new Dog()
const dogMaker = new AnimalMaker(dog)
const dog_1 = dogMaker.create()

console.log(cat_1, catMaker.getCounter())
console.log(catMaker.getCounter()) // 2
console.log(dog_1)
console.log(dogMaker.getCounter()) // 1
