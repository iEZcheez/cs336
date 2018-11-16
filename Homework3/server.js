/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.set('port', (process.env.PORT || 3000));

//////////////////////////////////////////////
//                 MONGODB                  //
//////////////////////////////////////////////
// Lab10 - Load Mongo Library and establish connection
var MongoClient = require('mongodb').MongoClient
// Global db variable for GET and POST to use
var db;
// Create an environment variable (I exported MONGO_PASSWORD within WebStorm) and set the class password in it
var password = process.env.MONGO_PASSWORD;
var mongo_connection = "mongodb://cs336:" + password + "@ds249583.mlab.com:49583/cs336";

//LAB 09 -- We are now using /dist for our static files and JSON parser
app.use('/', express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

//////////////////////////////////////////////
// HOMEWORK 2 CODE MODIFIED INTO HOMEWORK 3 //
//////////////////////////////////////////////
// ROUTE (GET): Display all people in peopleArray
app.get('/people', (req, res) => {
    db.collection('people').find({}).toArray(function (err, mongoArray){
        if (err) {
            res.sendStatus(404);
        } else {
            res.json(mongoArray);
        }
    });
});

// ROUTE (POST): Send a form to this route and append to peopleArray
app.post('/people', (req, res) => {
    var peopleArray = [];

    var person = {
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        startDate: req.body.startDate
    };

    //Homework 3: Create local array for the code to search if the ID exists
    db.collection('people').find({}).toArray(function (err, mongoArray){
        if (err) {
            res.sendStatus(404);
        } else {
            peopleArray = mongoArray;
        }
    });

    //Check if ID is existing
    //The POST is not sent if this ID check finds an existing ID
    for (var i = 0; i < peopleArray.length; i++) {
        res.send(peopleArray[i].id);
        if (peopleArray[i].id == req.body.id) {
            res.send( {'content': 'ID already exists'} );
            return;
        }
    }

    //Homework 3: Add person into the Mongo database
    db.collection('people').insertOne({
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        startDate: req.body.startDate
    });

    // Response from the route after finishing the updates
    res.send({
        'content': 'Succesfully added: ' + req.body.firstName + " " + req.body.lastName
    });
});

app.post('/getPerson', (req, res) => {
    db.collection('people').find({"id": req.body.id}).toArray(function (err, mongoArray) {
        if (err) {
            res.sendStatus(404);
        } else {
            peopleArray = mongoArray;
            var person = getPerson(req.body.id);
            if (person != '404') {
                res.send({"person": JSON.stringify(person)});
            } else {
                res.sendStatus(404);
            }
        }
    });
});

// ROUTE (GET): Get the person record of that ID in ":id"
app.get('/person/:id', (req, res) => {
    db.collection('people').find({"id": req.params.id}).toArray(function (err, mongoArray){
        if (err) {
            res.sendStatus(404);
        } else {
            res.send(mongoArray);
        }
    });
});

// ROUTE (DELETE): Remove the person from peopleArray
// and update people.json
app.delete('/person/:id', (req, res) => {
    //Homework 3: Mongo DELETE document command
    db.collection('people').deleteOne({"id": req.params.id})
    res.send("Person with id: " + req.params.id + " has been removed");
});

// ROUTE (PUT): Update the person in the peopleArray
// given a request with data using the PUT method and update people.json
app.put('/person/:id', function (req, res) {
    db.collection('people').updateMany({
        id: req.body.id
    }, {
        $set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        startDate: req.body.startDate
        }
    })
    res.send(req.body.firstName + " with ID# " + req.params.id + " has been changed");
});

// ROUTE (GET): Display the name of the person given an ID in ":id"
app.get('/person/:id/name', (req, res) => {
    db.collection('people').find({"id": req.params.id}).toArray(function (err, mongoArray){
        peopleArray = mongoArray;
        res.json(getName(req.params.id));
    });
});

//ROUTE (GET): Retrieve years in work
app.get('/person/:id/years', (req, res) => {
    db.collection('people').find({"id": req.params.id}).toArray(function (err, mongoArray){
        peopleArray = mongoArray;
        res.json(getYears(req.params.id));
    });
});

//FUNCTION: Calculate years in work
function getYears(id) {
    for (var i = 0; i < peopleArray.length; i++) {
        if (peopleArray[i].id == id) {
            var today = new Date();
            var yearStarted = new Date(peopleArray[i].startDate);
            var years = today.getFullYear() - yearStarted.getFullYear();
            var m = today.getMonth() - yearStarted.getMonth();

            if (m < 0 || (m === 0 && today.getDate() < yearStarted.getDate())) {
                years--;
            }
            return years;
        }
    }
    return '404';
}

// FUNCTION: Get the name of the person in peopleArray given an ID
function getName(id) {
    for (var i = 0; i < peopleArray.length; i++) {
        if (peopleArray[i].id == id) {
            return (peopleArray[i].firstName + " " + peopleArray[i].lastName);
        }
    }
    return '404';
}

// FUNCTION: Return the person in the peopleArray given an ID
function getPerson(id) {
    for (var i = 0; i < peopleArray.length; i++) {
        if (peopleArray[i].id == id) {
            return peopleArray[i];
        }
    }
    return '404';
}

// For a page that contains nothing send an error
app.all("*", (req, res) => {
    res.sendStatus(404);
})

// Lab 10 Create MongoDB connection and start the server after the DB connection
MongoClient.connect(mongo_connection, function (err, client) {
    if (err) throw err

    db = client;
    console.log('Connected to MongoDB: ' + mongo_connection);

    // Lab 10 - Start the server after connecting to MongoDB
    app.listen(app.get('port'), function() {
        console.log('Server started: http://localhost:' + app.get('port') + '/');
    });
});
