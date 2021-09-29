require('dotenv').config()
const express = require('express')

const {PORT} = require('./config')
const shopifyRouter = require('./shopifyRouter')

const app = express()
app.use(express.json())

app.get('/', async (req, res) => {
    res.status(200).json({message: 'Hello Rutter!'})
})

app.use('/api/shopify', shopifyRouter)

app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`))

module.exports = app
