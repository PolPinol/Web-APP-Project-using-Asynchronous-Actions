const config = require('./config');

const express = require('express')

const app = express()
const PORT = config.express.port

app.use(express.static('./dist/'))

app.listen(PORT, function (err) {
    if (err) console.log(err)
    console.log('Server listening on PORT', PORT)
})