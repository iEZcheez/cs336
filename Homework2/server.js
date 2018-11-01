// Express configuration
const express = require('express');
const app = express();
const port = 3000;

// Require file-reading for people.json
var fs = require('fs');
var path = require('path');
var peopleFile = path.join(__dirname, 'people.json');

// Use static files in /app
app.use(express.static("public"));

// JSON parser import
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Array containing people used to display /people
var peopleArray = [];

// Use the imported fs library and read people.json
// and import it into peopleArray for usage
fs.readFile(peopleFile, function (err, data) {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    peopleArray = JSON.parse(data);
});

// ROUTE (GET): Display all people in peopleArray
app.get('/people', (req, res) => {
    res.send(peopleArray);
});

// ROUTE (POST): Send a form to this route and append to peopleArray
app.post('/people', (req, res) => {
    var person = {
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        startDate: req.body.startDate
    };

    for (var i = 0; i < peopleArray.length; i++) {
        if (peopleArray[i].id == req.body.id) {
            res.send( {'content': 'ID already exists'} );
            return;
        }
    }
    // append peopleArray
    peopleArray.push(person);

    // JSON the peopleArray
    var peopleArrayJSON = JSON.stringify(peopleArray);

    // Write the JSON'd peopleArray to the people.json
    fs.writeFile(peopleFile, peopleArrayJSON, function (err) {
        console.log(err)
    });

    // Response from the route after finishing the updates
    res.send({
        'content': 'Succesfully added: ' + req.body.firstName + " " + req.body.lastName
    });
});

app.post('/getPerson', (req, res) => {
    var requestedID = req.body.id;
    var person = getPerson(req.body.id);
    if (person != '404') {
        res.send({
            "person": JSON.stringify(person)
        });
    } else {
        res.sendStatus(404);
    }
});

// ROUTE (GET): Get the person record of that ID in ":id"
app.get('/person/:id', (req, res) => {
    var response = getPerson(req.params.id);
    if (response != "404") {
        res.send(response);
    } else {
        res.sendStatus(404);
    }
});

// ROUTE (DELETE): Remove the person from peopleArray
// and update people.json
app.delete('/person/:id', (req, res) => {
    var idToDelete = req.params.id;

    for (var i = 0; i < peopleArray.length; i++) {
        if (peopleArray[i].id == idToDelete) {
            delete peopleArray[i];
            var peopleArrayJSON = JSON.stringify(peopleArray);
            fs.writeFile(peopleFile, peopleArrayJSON, function (err) {
                console.log(err)
            });
            res.send("Person with id: " + idToDelete + " has been removed");
        }
    }
    res.sendStatus(404);
});

// ROUTE (PUT): Update the person in the peopleArray
// given a request with data using the PUT method and update people.json
app.put('/person/:id', function (req, res) {
    for (var i = 0; i < peopleArray.length; i++) {
        if (peopleArray[i].id == req.body.id) {
            peopleArray[i].firstName = req.body.firstName;
            peopleArray[i].lastName = req.body.lastName;
            peopleArray[i].startDate = req.body.startDate;
            var peopleArrayJSON = JSON.stringify(peopleArray);
            fs.writeFile(peopleFile, peopleArrayJSON, function (err) {
                console.log(err)
            });
            res.send(req.body.firstName + " with ID# " + req.params.id + " has been changed");
        }
    }
    res.sendStatus(404);

});

// ROUTE (GET): Display the name of the person given an ID in ":id"
app.get('/person/:id/name', (req, res) => {
    var request = req.params.id;
    var response = getName(request);
    if (response != "404") {
        res.send(response);
    } else {
        res.sendStatus(404);
    }
});

//ROUTE (GET): Retrieve years in work
app.get('/person/:id/years', (req, res) => {
    console.log(req.params.years);
    var response = getYears(req.params.id, req.params.years);
    if (response != "404") {
        res.json(response);
    } else {
        res.sendStatus(404);
    }
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));