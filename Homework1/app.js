const express = require('express')
const app = express()
const port = 3000

//Index is unavailable
app.get('/', (req, res) => res.redirect('/people'))

//Hard-coded database
var peopleArray = JSON.parse(`
[
    {"id": "1", "firstName": "Gavin", "lastName":"Martin", "startDate": "1998-09-03T23:18:10.328Z"},
    {"id": "2", "firstName": "Sammer", "lastName":"Mall", "startDate": "2005-11-03T23:18:10.328Z"},
    {"id": "3", "firstName": "Ian", "lastName":"Christenson", "startDate": "2002-01-03T23:18:10.328Z"},
    {"id": "4", "firstName": "Marcos", "lastName":"Hernandez", "startDate": "2012-03-03T23:18:10.328Z"},
    {"id": "5", "firstName": "Shion", "lastName":"Fukuzawa", "startDate": "2017-12-03T23:18:10.328Z"},
    {"id": "6", "firstName": "Valeria", "lastName":"Martinez", "startDate": "2001-09-03T23:18:10.328Z"},
    {"id": "7", "firstName": "Andrew", "lastName":"Quist", "startDate": "2012-10-03T23:18:10.328Z"},
    {"id": "8", "firstName": "Mathew", "lastName":"Getz", "startDate": "2003-09-03T23:18:10.328Z"},
    {"id": "9", "firstName": "Caleb", "lastName":"Boraby", "startDate": "2013-05-03T23:18:10.328Z"},
    {"id": "10", "firstName": "Jordan", "lastName":"Hordyk", "startDate": "2016-02-03T23:18:10.328Z"}
]
`);

//Retrieve all persons
app.get('/people', (req, res) => {
    res.json(peopleArray);
});

//Retrive person with that id
app.get('/person/:id', (req, res) => {
    var response = getPerson(req.params.id);
    if (response != "404") {
        res.json(response);
    } else {
        res.sendStatus(404);
    }
});

//FUNCTION: Find id in array
function getPerson(id) {
    for (var i = 0; i < peopleArray.length; i++) {
        if (peopleArray[i].id == id) {
            return peopleArray[i];
        }
    }
    return '404';
}

//Display name based from id
app.get('/person/:id/name', (req, res) => {
    var response = getName(req.params.id);
    if (response != "404") {
        res.json(response);
    } else {
        res.sendStatus(404);
    }
});

//FUNCTION: Create full name
function getName(id) {
    for (var i = 0; i < peopleArray.length; i++) {
        if (peopleArray[i].id == id) {
            return (peopleArray[i].firstName + " " + peopleArray[i].lastName);
        }
    }
    return '404';
}

//Retrieve years in work
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

app.all("*", (req, res) => {
    res.sendStatus(404);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


