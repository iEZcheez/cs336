//Kevin Tran
//CS336
//Lab7
//jQuery and AJAX

// Server configuration
const express = require('express')
const app = express()
const port = 3000

//Require body-parser for JSON
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Static file access
app.use(express.static('public'))

// "/Hello" route
app.post("/hello", function(req, res) {
    res.send({"content" : req.query.message})
})

// Console message
app.listen(port, () => console.log(`Example app listening on port ${port}!`))