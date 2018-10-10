const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.static('files'))
app.use('/', express.static('public'))

// body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Lab06: Please add index.html for main page'))

// Requests using GET should only retrieve data.
app.get('/request', function (req, res) {
    res.send('Got a GET request')
})

// The HEAD method asks for a response identical to that of a GET request, but without the response body.
app.head('/request', function (req, res) {
    res.send('Got a HEAD request')
})

// The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.
app.post('/request', function (req, res) {
    res.send('Got a POST request: ' + req.body.arg)
})

// The PUT method replaces all current representations of the target resource with the request payload.
app.put('/request', function (req, res) {
    res.send('Got a PUT request: ' + req.body.arg)
})

// The DELETE method deletes the specified resource.
app.delete('/request', function (req, res) {
    res.send('Got a DELETE request')
})

// Other routes
app.all('/*', function (req, res, next) {
    res.sendStatus(503);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))