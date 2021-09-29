import fetch from 'node-fetch'

import {LIMIT} from './config'

async function getShopifyData(offset){
    const url = `https://${process.env.SHOPIFY_URL}.myshopify.com/admin/api/2021-07/smart_collections.json`
    const response = await fetch(process.env.SHOPIFY_URL, {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
            'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN
        },

    })

    console.log('THIS IS MY RESPONSEEEE', response)
}




module.exports = {getShopifyData}