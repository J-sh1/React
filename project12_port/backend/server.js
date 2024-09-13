const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const indexRouter = require('./routes/index')

app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use('/', indexRouter)

app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), () => {
    console.log(`Server is running on http://localhost:${app.get('port')}`)
})