function Person(name) {
  this.name = name;
}
Person.prototype.getName = function() {
  return 'Mr.' + this.name;
};

function Personnel(name, title) {
  Person.call(this, name);
  this.title = title;
}

// 1. Clone prototype, otherwise Person.prototype
// has "getInfo" from Personnel
Personnel.prototype = Object.create(Person.prototype);

// 2. Reassign protorype constructor
// otherwise mark.constructor == Person
Personnel.prototype.constructor = Personnel;

// 3. override method from prototype
Personnel.prototype.getName = function() {
  const name = Person.prototype.getName.call(this);
  return 'Employee: ' + name;
};

Personnel.prototype.getInfo = function() {
  return `${this.getName()} (${this.title})`;
};

const mark = new Personnel('Mark', 'accountant');
console.log(mark.getInfo()); // Employee: Mr.Mark (accountant)
