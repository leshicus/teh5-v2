/**
 * Строитель
 */
// Стротель списка
function ListBuilder() {
  let list = ''

  this.addElement = function(el) {
    list += `<li>${el}</li>`
  }

  this.getList = function() {
    return `<ul>${list}</ul>`
  }
}

// Строитель строчки
function StringBuilder() {
  let str = ''

  this.addElement = function(el) {
    str += ', ' + el
  }

  this.getList = function() {
    return str
  }
}

// Построитель конкретного списка
function TwoElementListMaker() {
  this.make = function(builder) {
    builder.addElement('1')
    builder.addElement('2')
  }
}

const twoElementListMaker = new TwoElementListMaker()

const listBuilder = new ListBuilder()
twoElementListMaker.make(listBuilder)
console.log(listBuilder.getList()) // <ul><li>1....

const stringBuilder = new StringBuilder()
twoElementListMaker.make(stringBuilder)
console.log(stringBuilder.getList()) // , 1, 2
