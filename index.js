require('dotenv').config()
const express = require('express')

const app = express()
app.use(express.json())

app.get('/', async (req, res) => {
    res.status(200).json({message: 'Hello Rutter!'})
})


app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`))

module.exports = app
