/**
 * В клиентский код (абстрактную фабрику) передается конкретная фабрика, которая реализует 
 * какой-то функционал конкретным способом.
 */
function ElectricMoto() {
  this.fuelType = 'Electric'
  this.vehicleType = 'Electric'
  this.run = function(params) {
    console.log('electric moto: run')
    return 'electric moto: run'
  }
  this.stop = function(params) {
    console.log('electric moto: stop')
  }
}

function ElectricCar() {
  this.run = function(params) {
    console.log('electric car: run')
  }
  this.stop = function(params) {
    console.log('electric car: stop')
  }
}

function GasolineMoto() {
  this.run = function(params) {
    console.log('Gasoline moto: run')
    return 'Gasoline moto: run'
  }
  this.stop = function(params) {
    console.log('Gasoline moto: stop')
  }
}

function GasolineCar() {
  this.run = function(params) {
    console.log('Gasoline car: run')
  }
  this.stop = function(params) {
    console.log('Gasoline car: stop')
  }
}

function ElectricVihicle() {
  this.createMoto = function() {
    return new ElectricMoto()
  }
  this.createCar = function() {
    return new ElectricCar()
  }
}

function GasolineVihicle() {
  this.createMoto = function() {
    return new GasolineMoto()
  }
  this.createCar = function() {
    return new GasolineCar()
  }
}

function tester(vihicle) {
  const moto = vihicle.createMoto()
  const car = vihicle.createCar()

  console.log(moto.run())
  car.run()
}

tester(new ElectricVihicle())
tester(new GasolineVihicle())

function Upperize(arg) {
  this.arg = arg
  this.upperize = function() {
    return this.arg.toUpperCase()
  }
}

function B() {
  Upperize.call(this, arguments[0])
  this.print = function() {
    return this.upperize()
  }
}

const b = new B('asd')
console.log(b.print())
