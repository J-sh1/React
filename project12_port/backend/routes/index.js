const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => {
    console.log('index Main Router')
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'build', 'index.html'))
})

router.post('/joinData', (req, res) => {
    console.log(req.body)
})


module.exports = router 