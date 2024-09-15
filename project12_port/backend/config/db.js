require('dotenv').config({ path: '.env' })
const mysql = require('mysql2')
const path = require('path')

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
  })

  conn.connect((err) => {
    if (err) {
        console.error(err)
    } else {
        console.log('Connected to MySQL')
    }
  })

  module.exports = conn