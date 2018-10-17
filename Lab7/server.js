//Kevin Tran
//CS336
//Lab7
//jQuery and AJAX

// Server configuration
const express = require('express')
const app = express()
const port = 3000

// Static file access
app.use(express.static('public'))



// Console message
app.listen(port, () => console.log(`Example app listening on port ${port}!`))