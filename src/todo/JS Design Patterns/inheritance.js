// INHERITANCE
// prototype

function Person(name) {
  this.name = name
}

Person.prototype.getName = function() {
  return this.name
}
Person.prototype.setName = function(name) {
  this.name = name
}

function Student(name, group) {
  Person.call(this, name)

  this.group = group
}
// console.log(Person.prototype)

Student.prototype = Person.prototype

Student.prototype.getGroup = function() {
  return this.group
}
Student.prototype.setGroup = function(group) {
  this.group = group
}
Student.prototype.print = function() {
  return this.name + ', ' + this.group
}
// console.log(Student.prototype)

const alex = new Student('Alex', 'PS-1')
alex.setName('Alexey')
alex.setGroup('PS-2')
// console.log(alex.getName(), alex.getGroup()) // Alexey, PS-2, 1

// -------------------------
function PersonCreator() {
  let counter = 0

  this.create = function(name) {
    counter++
    return new Person(name)
  }

  this.getAmount = function() {
    return counter
  }
}

// Factory method
function StudentCreator() {
  PersonCreator.apply(this)

  // let counter = 0

  this.create = function(name, group) {
    this.counter++
    return new Student(name, group)
  }

  // this.getAmount = function() {
  //   return counter
  // }
}

const studentCreator = new StudentCreator()
const boris = studentCreator.create('Boris', 'PS-1')
const sasha = studentCreator.create('Sasha', 'PS-1')

console.log(boris.print()) // Boris, PS-2
console.log(studentCreator.getAmount()) // 2

// -------------------------

function Teacher(name, faculty) {
  Person.call(this, name)

  this.faculty = faculty
}

Teacher.prototype.getFaculty = function() {
  return this.faculty
}
Teacher.prototype.print = function() {
  return this.name + ', ' + this.faculty
}

function TeacherCreator() {
  let counter = 0

  this.create = function(name, group) {
    counter++
    return new Teacher(name, group)
  }

  this.getAmount = function() {
    return counter
  }
}

// Abstract Factory
function Creator(Factory) {
  let count = 0

  const factory = new Factory()

  this.create = function(name, location) {
    count++
    return factory.create(name, location)
  }

  this.getAmount = function(params) {
    return count
  }
}

const ct = new Creator(TeacherCreator)
const cs = new Creator(StudentCreator)

const STUFF_NUMBER = 10
const FACULTIES = [ 'PS', 'BMT' ]
let university = {}

FACULTIES.map((faculty) => {
  const stuff = []
  for (let i = 0; i < STUFF_NUMBER; i++) {
    stuff.push(ct.create('FIO_' + i, faculty))
  }

  const students = []
  for (let i = 0; i < STUFF_NUMBER; i++) {
    students.push(cs.create('FIO_' + i, faculty))
  }

  university[faculty] = { stuff, students }
})

console.log(university)
console.log(university['BMT'])

// ------------------------- prototype
function A() {}
function B() {}

A.prototype.a = function a1() {}

B.prototype = A.prototype
B.prototype.c = 0

const a = new A()
const b = new B()
console.log(a.a, a.c)
console.log(b.a, b.c)

// classical inheritance
// -------------------------
// имеет только имя
class PersonClass {
  constructor(name) {
    this.name = name
  }

  getName() {
    return this.name
  }

  setName(name) {
    this.name = name
  }
}

const Pers = new PersonClass('Noname')
console.log(Pers)

// добавляется название группы
class StudentClass extends PersonClass {
  constructor(name, group) {
    super(name)

    this.group = group
  }

  getGroup() {
    return this.group
  }

  setGroup(group) {
    this.group = group
  }
}

const Stud = new StudentClass('Noname', 'Nogroup')
console.log(Stud)

// добавляется факультет
class TeacherClass extends PersonClass {
  constructor(name, faculty) {
    super(name)

    this.faculty = faculty
  }

  getFaculty() {
    return this.faculty
  }

  setFaculty(faculty) {
    this.faculty = faculty
  }
}

const Teach = new TeacherClass('Noname', 'Nofac')
console.log(Teach)

// добавляется подсчет созданных объектов
class StudCreator {
  constructor(props) {
    this.counter = 0
  }

  create(name, group) {
    this.counter++
    return new StudentClass(name, group)
  }
}

const studCreator = new StudCreator()
const vasya = studCreator.create('Vasya', 'BMT-1')
console.log(vasya, studCreator.counter)
