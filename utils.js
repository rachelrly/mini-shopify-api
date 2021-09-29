const fetch = require('node-fetch')


function getShopifyData(offset){
    const url = `${process.env.SHOPIFY_URL}/admin/api/2021-07/smart_collections.json`
    return fetch(url, {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
            'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN
        },
    })
    .then(res => res.json())
    .then(res => console.log('THIS IS THE RESPONSEEEE', res))
    .catch(err => {
        throw new Error(`Could not fetch stuff: ${err?.message || err}`)
    })
}




module.exports = {getShopifyData}