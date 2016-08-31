const q = require('./questions.js')
const express = require('express')
const app = express()

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
app.listen(3000)

/*
for( var i = 0; i < questions.list.length; ++i ) {
  var question = questions.list[i]()
  console.log(JSON.stringify(question, null, 2))
}*/