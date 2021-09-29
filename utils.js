const fetch = require('node-fetch')

function getShopifyData(){
    const url = `${process.env.SHOPIFY_URL}/admin/api/2021-07/products.json`
    return fetch(url, {
        method: 'get',
        headers: {
            'Content-type': 'application/json',
            'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN
        },
    })
    .then(res => res.json())
    .catch(err => {
        throw new Error(`Could not fetch stuff: ${err?.message || err}`)
    })
}

module.exports = { getShopifyData }