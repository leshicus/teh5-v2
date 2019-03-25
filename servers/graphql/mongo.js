const { MongoClient, ObjectId } = require('mongodb')

const MONGO_URL = 'mongodb://mongodb:27017'

class Mongo {
  constructor() {
    this.init()
  }

  async init() {
    try {
      this.client = await MongoClient.connect(MONGO_URL)
      this.db = this.client.db('texts')
      this.textblock = this.db.collection('textblock')
    } catch (e) {
      console.log(e)
    }
  }

  prepare(o) {
    console.log(o)
    o._id = o._id.toString()
    return o
  }
}

module.exports = {
  Mongo,
}
