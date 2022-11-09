const path = require('path')
const fs = require('fs')
const express = require('express')
const { nextTick } = require('process')
const app = express()

app.use(express.static(path.join(__dirname, 'page')))
//console.log(req.headers)
// const content = fs.readFileSync(path.join(__dirname, 'static', 'index.html'), 'utf-8')
// res.send(content)

app.get('/', function (req, res) {



})

app.listen(3000)