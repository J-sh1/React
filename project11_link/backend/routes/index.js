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
    const { id, pw, data } = req.body
    // console.log(data)
    const sql = `INSERT INTO LINK_MEMBER
		VALUES(?, ?, ?);`
    const values = [id, pw, data]
        conn.query(sql, values, (err, r) => {
            if (err) {
                console.error('DB Insert Error: ', err);
                return res.status(500).json({ error: 'DB Insert Error' })
            } else {     
                res.json({result : 'failed'})
            }
        })
})

router.post('/getLoginData', (req, res) => {
    // console.log('req', req.body)
    const {id, pw} = req.body

    const sql = `SELECT ID FROM LINK_MEMBER
                WHERE ID = ? AND PW = ?`
    conn.query(sql, [id, pw], (err, r) => {
        if(r.length > 0 ){

            req.session.userId = id
            console.log(req.session.userId)

            // 로그인 성공
            res.json({result : 'success', id : id})
        } else {
            // 로그인 실패
            res.json({result : 'failed'})
        }
    })
})

router.get('/logoutData', (req, res) => {
    console.log('로그아웃')
    req.session.destroy(() => {
        console.log(req.session)
        res.json({id : req.session})
    })  
})

router.get('/getSession', (req, res) => {
    console.log('getSession Router', req.session.userId)
    res.json({id : req.session.userId})
})


module.exports = router
