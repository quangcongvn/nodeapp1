const express = require('express')
const app = express()
const port = 4001

app.get('/', (req, res) => res.send('test git clone'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

/// Cong add more

// assets folder (like PHP assets)
app.use(express.static('public'))
// security
var helmet = require('helmet')
app.use(helmet())