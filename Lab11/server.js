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

app.get('/api/comments', function(req, res) {
    // Lab 10 - MongoDB commands
    db.collection('comments').find({}).toArray(function (err, comments){
        res.json(comments);
    });
});

app.post('/api/comments', function(req, res) {
    // Lab 10 - MongoDB commands
    db.collection('comments').insertOne({
        id: Date.now(),
        author: req.body.author,
        text: req.body.text
    })
});

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
