const app = require('express')()
const cors = require('cors')
require('express-async-errors')

app.use(cors())

//  얘를 토큰검사하고 문제가 없으면 아래로 내려감
app.use(require('../middlewares/verifyToken'))

app.post('/', (req, res) => {
  res.send('post ok')
})

app.get('/', (req, res) => {
  res.send('get ok')
})
app.get('/:id', (req, res) => {
  res.send('get ok ' + req.params.id)
})

app.put('/:id', (req, res) => {
  res.send('put ok ' + req.params.id)
})

app.delete('/:id', (req, res) => {
  res.send('delete ok ' + req.params.id)
})

// app.use(require('../middlewares/error'))

module.exports = app
