const config = require('./config')
const express = require('express')
const app = express()
const fs = require('fs')
const cors = require('cors')
const PORT = config.express.port

app.use(express.static('./dist/'))

app.use(cors({
  origin: '*'
}))

// JSON nd x-www-form-urlencoded parsers
app.use(express.json());
app.use(express.urlencoded());

app.get('/api/list', function (req, res) {
    if (req.query.search == undefined) {
      res.status(500).send("Bad parameters")
    }
    else {
      let search = req.query.search
      let data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))
      let hero = data.overwatch.filter(
          e => {
              return (e.key.indexOf(search) != -1) || (e.name.indexOf(search) != -1) || (e.role.indexOf(search) != -1) || (e.message.indexOf(search) != -1)
          }
      )
      res.send(
          hero
      )
    }
})

app.post('/api/detail', function (req, res) {
    if (req.body.key == undefined) {
      res.status(500).send("Bad parameters")
    }
    else {
      let data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))
      let hero = data.overwatch.filter(
          e => {
              return e.key == req.body.key
          }
      )
      res.send(
          hero
      )
    }
})

app.listen(PORT, function (err) {
    if (err) console.log(err)
    console.log('Server listening on PORT', PORT)
})
