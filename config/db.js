const {db} = require('./index');

const mysql = require('knex')({
    client: 'mysql',
    connection: {
      host: db.dbHost,
      user: db.dbUser,
      password: db.dbPass,
      database: db.dbName
    },
    pool: { min: 0, max: 7 }
  })

class Database {
  static client;
  constructor(){
    if(Database.client){
      return Database.client;
    }
    Database.client = mysql;
    this.client = Database.client;
  }
}

module.exports = new Database();