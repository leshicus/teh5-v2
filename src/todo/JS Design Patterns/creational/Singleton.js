/**
 * Singleton
 */
function Settings(l) {
  if (Settings.prototype._instance) return Settings.prototype._instance

  Settings.prototype._instance = this

  let login = l

  this.getLogin = function() {
    return login
  }

  this.setLogin = function(l) {
    login = l
  }
}

const settings = new Settings('user_1')
console.log(settings.getLogin()) // user_1

settings.setLogin('user_2')
console.log(settings.getLogin()) // user_2

// user_3 не применится, т.к. менять параметр можно только через сеттер setLogin
const settings_2 = new Settings('user_3')
console.log(settings_2.getLogin()) // !!! user_2

settings_2.setLogin('user_4')
console.log(settings_2.getLogin()) // user_4
