// Adaptee
function PersonData() {
  const rows = []

  this.getString = function() {
    return rows.join('\n')
  }

  this.addLine = function(line) {
    rows.push(line)
  }
}

// Adapter
function Adapter(personDataObject) {
  this.personDataObject = personDataObject

  this.getFio = function() {
    return this.personDataObject.getString()
  }
}

function getFioAdapter() {
  const personDataObject = new PersonData()
  const adapter = new Adapter(personDataObject)

  personDataObject.addLine('Alex')
  personDataObject.addLine('Volkov')
  personDataObject.addLine('Igorevich')

  return adapter
}

// Client
const adapter = getFioAdapter()
const fio = adapter.getFio()
console.log(fio)
