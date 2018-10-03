var express = require('express');
const app = express()
var router = express.Router();
const port = 3000

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now());
    next()
});
// define the home page route
router.get('/', function (req, res) {
    res.send('Birds home page')
});
// define the about route
router.get('/about', function (req, res) {
    var responseObject = { message: 'Hi' };
    res.send(responseObject)
});

module.exports = router;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))