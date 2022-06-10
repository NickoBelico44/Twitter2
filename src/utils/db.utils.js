const mysql2 = require('mysql2/promise')

exports.getConnection = async () => {
  return mysql2.createConnection({
    host: 'mern202201.cqv0xuznu3xy.us-east-1.rds.amazonaws.com',
    user: 'jlopez',
    password: 'Jlopez#123',
    database: 'jlopezdb'
  })
}