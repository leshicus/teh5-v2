// Parent
function Person(name) {
  this.name = name
}

Person.prototype.getName = function() {
  return 'Mr.' + this.name
}

// Child
function Personnel(name, title) {
  Person.call(this, name)

  this.title = title
}

// clone prototype, otherwise Person.prototype.getInfo
Personnel.prototype = Object.create(Person.prototype)

// override method from prototype
Personnel.prototype.getName = function() {
  const name = Person.prototype.getName.call(this)
  return 'Employee: ' + name
}

Personnel.prototype.getInfo = function() {
  return `${this.getName()} (${this.title})`
}

// assign new constructor
// otherwise mark.__proto__.constructor.name = Person
Personnel.prototype.constructor = Personnel

const mark = new Personnel('Mark', 'accountant')
console.log(mark.getInfo()) // Employee: Mr.Mark (accountant)
