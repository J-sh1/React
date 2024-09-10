const express = require ('express')
const router = express.Router()
const path = require('path')
const conn = require('../config/db')

router.get('/', (req, res) => {
    console.log('main')
    res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'))
})

// Test.jsx 에서 보내온 데이터 확인하는 back router
router.post('/getData', (req, res) => {
    // console.log('getData', req.body)
    const { data } = req.body
    // console.log(data)
    const sql = `INSERT INTO LINK_MEMBER
		VALUES('admin', '123', ?);`
    const values = [data]
        conn.query(sql, values, (err, r) => {
            if (err) {
                console.error('DB Insert Error: ', err);
                return res.status(500).json({ error: 'DB Insert Error' })
            } else {     
                window.alert('성공')
            }
        })
})

module.exports = router
