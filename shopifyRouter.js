const express = require('express')

const {getAllShopifyData} = require('./utils')

const shopifyRouter = express.Router()

shopifyRouter
    .post('/', async (req, res, next) => {
        try {
            const data = await getAllShopifyData()
            return res
            .status(200)
            .json(data)
        } catch (error) {
            const errorMessage = 'Could not fetch data from Shopify API: ' + (error?.message || error)
            return res
            .status(400)
            .json({message: errorMessage})
        }
    })

module.exports = shopifyRouter