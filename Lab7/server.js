//Kevin Tran
//CS336
//Lab7
//jQuery and AJAX

// Server configuration
const express = require('express')
const app = express()
const port = 3000

//Require status codes
const http_status = require('http-status-codes')

//Require body-parser for JSON
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Static file access
app.use(express.static('public'))

// "/Hello" route
app.get("/hello", (req, res) => res.send(req.query));

// app.get("/hello", function (req, res) {
//     res.sendfile('public/lab07.html');
//     // res.send('Got a GET request')
//     // res.sendStatus(http_status.OK)
// });

app.get("/fetch", function(req, res) {
    res.send({"content" : "Did we mention that " + req.query.name + " is free!"})
})

// Console message
app.listen(port, () => console.log(`Example app listening on port ${port}!`))