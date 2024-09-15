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
})

/** 로그인 */
router.post('/login', (erq, res) => {
    console.log('gds')
})

module.exports = router 