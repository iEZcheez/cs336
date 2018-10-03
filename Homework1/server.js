const express = require('express')
const app = express()
//router
const router = express.Router()
const port = 3000

//access public folder static files
app.use(express.static('public'))
app.use(express.static('files'))
app.use('/', express.static('public'))

//define people rout
router.get('/people', function (req, res) {
    res.send('About birds')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))