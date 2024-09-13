const mysql = require('mysql2')

const conn = mysql.createConnection({
    'host' : 'localhost', 
    'user' : 'root', 
    'password' : '1234',
    'port' : 3306, 
    'database' : 'NODEJS'
})

conn.connect()
module.exports = conn