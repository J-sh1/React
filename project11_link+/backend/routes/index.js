const express = require('express')
const router = express.Router()
const path = require('path')
const conn = require('../config/db')

router.get('/', (req, res) => {
    console.log('index Main Router')
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'build', 'index.html'))
})

/** frontend에서 보내온 데이터를 확인하는 라우터 */
router.post('/getData', (req, res) => {
    console.log('getData Router', req.body)
    let {id, pw, userName} = req.body

    let sql = `INSERT INTO LINK_MEMBER 
                VALUES (?, ?, ?)`
    conn.query(sql, [id, pw, userName], (err, r) => {
        // console.log('rows', r)
        if (r) {
            res.json({result : 'success'})
        } else {
            res.json({result : 'failde'})
        }
    })

})

// 로그인 라우터
router.post('/handleLogin', (req, res) => {
    // console.log(req.body)
    let {id, pw} = req.body
    let sql = `SELECT ID, USER_NAME FROM LINK_MEMBER WHERE ID = ? AND PW = ?`
    conn.query(sql, [id, pw], (err, r) => {
        if (r.length > 0) {
            console.log('로그인', r[0].USER_NAME)
            res.json({result : 'success', username : r[0].USER_NAME, id : r[0].ID })
        } else {
            res.json({result : 'failde'})
        }
    })
})


module.exports = router 