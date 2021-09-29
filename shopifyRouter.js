const express = require('express')
const {getShopifyData} = require('./utils')
const shopifyRouter = express.Router()

shopifyRouter
    .post('/', async (req, res, next) => {
        try {
            const {offset=0} = req.body
            const data = await getShopifyData(offset)
            return res
            .status(200)
            .json([])
        } catch (error) {
            const errorMessage = 'Could not fetch data from Shopify API: ' + (error?.message || error)
            return res
            .status(400)
            .json({message: errorMessage})
        }
    })

module.exports = shopifyRouter