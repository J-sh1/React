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
    // console.log(req.body)
    let {id, pw, name, number, gender} = req.body

    let sql = `INSERT INTO USER_INFO
            VALUES (?, ?, ?, ?, ?)`
    
    conn.query(sql, [id, pw, name, number, gender], (err, r) => {
        if (err) {
            console.error('쿼리 전송 실패:', err) // 에러 메시지 출력
            res.json({ result: 'fail', error: err }) // 에러 메시지 반환
        } else {
            // console.log('쿼리 전송 성공')
            res.json({ result: 'success' })
        }
    })
})

/** 로그인 */
router.post('/login', (req, res) => {
    // console.log(req.body)
    let {id, pw} = req.body
    
    let sql = `SELECT USER_ID, USER_NAME FROM USER_INFO
            WHERE USER_ID = ? AND USER_PW = ?`
    
    conn.query(sql, [id, pw], (err, r) => {
        if (err) {
            // 쿼리 실행 중 에러가 발생한 경우
            console.error('쿼리 오류:', err);
            return res.json({ result: 'error', message: '쿼리 실행 중 오류가 발생했습니다.' });
        }

        if (r && r.length > 0) {
            // 로그인 성공
            res.json({
                result: 'success',
                id: r[0].USER_ID,
                name: r[0].USER_NAME
            })
        } else {
            // 로그인 실패
            res.json({ result: 'fail', message: '아이디 또는 비밀번호가 올바르지 않습니다.' });
        }
    })
})

module.exports = router 