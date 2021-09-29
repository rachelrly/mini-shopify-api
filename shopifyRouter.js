const express = require('express')

const {getAllShopifyData} = require('./utils')

const shopifyRouter = express.Router()

shopifyRouter.get('/', async (req, res) => {
        try {
            const products = await getAllShopifyData()
            return res
            .status(200)
            .json(products)
            
        } catch (error) {
            const errorMessage = 'Could not fetch data from Shopify API: ' + error?.message
            return res
            .status(400)
            .json({message: errorMessage})
        }
    })

module.exports = shopifyRouter