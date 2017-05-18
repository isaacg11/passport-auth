let mongodb = require('mongodb');

class Database {
  static connect() {
    return mongodb.MongoClient.connect('mongodb://isaac:123@ds157987.mlab.com:57987/codercamps-db').then((db) => {
      console.log('db connected');
      this.db = db;
    })
  }

  constructor(db) {}
}

module.exports = Database;
