const q = require('./questions.js')
const express = require('express')
const app = express()
const ip = require('ip')

var count = 0

app.set('views', './')
app.set('view engine', 'pug')
app.get('/', function (req, res) {
  var index = q.rand(0, q.length )
  var question = q.list[index]
  count++
  var locals = {
    'q' : question(),
    title: `Question #${count}`
  }
  console.log(JSON.stringify(locals, null, 2))
  res.render('./page.pug', locals)
})

app.listen(3000, ()=>{
  var msg = `Connect to: ${ip.address()}:3000`
  console.log(msg)
})
