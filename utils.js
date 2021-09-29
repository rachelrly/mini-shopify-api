const fetch = require('node-fetch')

function getAllShopifyData(){
    const url = `${process.env.SHOPIFY_URL}/admin/api/2021-07/products.json?feilds=id%2Ctitle?limit=20`
    return fetch(url, {
        method: 'get',
        headers: {
            'Content-type': 'application/json',
            'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN
        },
    })
    .then(res => res.json())
    .then(res => modifyShopifyData(res.products))
    .catch(err => {
        throw new Error(err?.message || err)
    })
}

function modifyShopifyData(products){
    return products.map(({id, title}) => ({platform_id: id, name: title}))
}



module.exports = { getAllShopifyData }