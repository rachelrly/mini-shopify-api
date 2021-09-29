# Mini Shopify Api

This repo contains an API with one endpoint that returns transformed data from the Shopify REST API

## Tech Stack

- Node.js
- Express.js
- [node-fetch](https://www.npmjs.com/package/node-fetch)

## How to use

### GET /api/shopify

To test this endpoint, you will need an `.env` containing your `SHOPIFY_ACCESS_TOKEN` and `SHOPIFY_URL`

Simply make a `GET` request to `http://localhost:8553/api/shopify`, and the endpoint will return the first 20 items from the Shopify API transformed with the above schema


## Prompt

Write an API endpoint that does the following: 
1. Fetches all Products from a Shopify store (we will provide the information and credentials to call the Shopify API below).
2. Transform the Shopify Products data into the JSON schema we define below:
```
{
   platform_id: string // The Shopify ID of the product
   name: string // The title of the product in Shopify
 }
```
3. After each Product has been transformed into the JSON schema above, return or print the array of formatted products to the console.
```
// For example, here's a sample output:
[
  {
    platform_id: "1",
    name: "A great product",
  },
	{
		platform_id: "2",
		name: "Another great product"
	}
	// ... other products
]
```

