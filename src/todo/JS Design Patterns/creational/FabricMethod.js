/**
 * Фабричный метод
 */
function Kontragent(n) {
  const name = n

  this.printName = function() {
    return name
  }
}

function Student(name, gr) {
  Kontragent.apply(this, [ name ])

  const group = gr

  this.printGroup = function() {
    return group
  }

  this.printAll = function() {
    return this.printName() + ', ' + group
  }
}

function KontragentCreator() {
  this.kontragentCounter = 0

  // Фабричный метод
  this.create = function(name) {
    this.kontragentCounter++
    return new Kontragent(name)
  }

  this.getKontragentCounter = function() {
    return this.kontragentCounter
  }
}

function StudentCreator() {
  KontragentCreator.apply(this)

  let studentCounter = 0

  // Фабричный метод
  this.create = function(name, group) {
    studentCounter++
    this.kontragentCounter++
    return new Student(name, group)
  }

  this.getStudentCounter = function() {
    return studentCounter
  }
}

// Test
const kontragentCreator = new KontragentCreator()
const studentCreator = new StudentCreator()

const student_1 = studentCreator.create('Vasya', 'PS-1')
const student_2 = studentCreator.create('Petya', 'BMT-2')
const student_3 = studentCreator.create('Kolya', 'BMT-1')

const kontragent = kontragentCreator.create('OOO Mik-Inform')

console.log(student_1.printName(), student_1.printGroup()) // Vasya PS-1
console.log(student_1.printAll()) // Vasya, PS-1

console.log(studentCreator.getStudentCounter()) // 3
console.log(studentCreator.getKontragentCounter()) // 3
console.log(kontragentCreator.getKontragentCounter()) // 1
