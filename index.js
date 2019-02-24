const express = require('express')
const app = express()
const port = 4001

app.get('/', (req, res) => res.send('Hello World! Hello NodeJS, Can we make great? update some'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))