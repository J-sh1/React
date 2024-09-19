const express = require('express')
const router = express.Router()
const path = require('path')
const conn = require('../config/db');

router.get('/', (req, res) => {
    console.log('index Main Router')
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'build', 'index.html'))
})

/** 회원가입 */
router.post('/joinData', (req, res) => {
    console.log(req.body)
    let {id, pw, name, number, gender} = req.body

    let sql = `INSERT INTO USER_INFO
            VALUES (?, ?, ?, ?, ?)`
    
    conn.query(sql, [id, pw, name, number, gender], (err, r) => {
        if(r){
            res.json({result : 'success'})
        } else {
            res.json({result : 'fail'})
        }
    })
})

/** 로그인 */
router.post('/login', (req, res) => {
    console.log('gds')
    let {id, pw} = req.body
    
    let sql = `SELECT ID, NAME FROM USER_INFO
            WHERE ID = ? AND PW = ?`
    
    conn.query(sql, [id, pw], (err, r) => {
        if (r.length > 0) {
            res.json({
                result : 'success',
                username : r[0].USER_NAME,
                id : r[0].USER_ID
            })
        } else {
            res.json({result : 'fail'})
        }
    })
})

module.exports = router 