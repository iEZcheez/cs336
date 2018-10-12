//Kevin Tran
//CS336
//Lab6

// Server configuration
const express = require('express')
const app = express()
const port = 3000

//Require status codes
const http_status = require('http-status-codes');

//Require body-parser for JSON
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Static file access
app.use(express.static('public'))

// Exercise 6.1
// Requests using GET should only retrieve data.
app.get('/request', function (req, res) {
    res.send('Got a GET request')
    res.sendStatus(http_status.OK)
})

// The HEAD method asks for a response identical to that of a GET request, but without the response body.
app.head('/request', function (req, res) {
    res.send('Got a HEAD request')
    res.sendStatus(http_status.OK)
})

// The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.
app.post('/request', function (req, res) {
    // res.send('Got a POST request')
    res.send('\nGot a POST request ' + "\narg: " + req.body.arg + '\n')
    res.sendStatus(http_status.OK)
})

// The PUT method replaces all current representations of the target resource with the request payload.
app.put('/request', function (req, res) {
    res.send('\nGot a PUT request ' + "\narg: " + req.body.arg + '\n')
    res.sendStatus(http_status.OK)
})

// The DELETE method deletes the specified resource.
app.delete('/request', function (req, res) {
    res.send('Got a DELETE request')
    res.sendStatus(http_status.OK)
})

// Exercise 6.2
// POST method -> Receive form and print data
app.post('/forms', function (req, res) {
    res.send(req.body)
    res.sendStatus(http_status.OK)
})

// Other non-existing routes
app.all('/*', function (req, res, next) {
    res.sendStatus(http_status.NO_CONTENT)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))