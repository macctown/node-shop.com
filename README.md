# node-shop.com
[![npm version](https://badge.fury.io/js/node-shop.com.svg)](https://badge.fury.io/js/node-shop.com)

Node.js Module for Shop.com API

#Install
```
npm install --save node-shop.com
```

#Usage
```javascript
//init your Shop instace
var Shop = require('node-shop.com').initShop({
	apikey: 'YOUR_API_KEY'
});

//search product by ID
Shop.products('874694776', {allperms: false})
	.then(function (data) {
	  console.log(data);
	})
	.catch(function (err) {
	  console.error(err);
	});

//search product by keywords
Shop.search("socks", {page: 1, count:1})
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.error(err);
    });

//get afflicate program information on products categories
Shop.apnCategory({publisherID: 'TEST', locale: 'en_US'})
	.then(function (data) {
	  console.log(data);
	})
	.catch(function (err) {
	  console.error(err);
	});

//get afflicate program information on products
Shop.apnProduct({publisherID: 'TEST', locale: 'en_US', perPage: '15'})
	.then(function (data) {
	  console.log(data);
	})
	.catch(function (err) {
	  console.error(err);
	});

//get afflicate program information on products categories by product ID
Shop.apnProductById('874694776', {publisherID: 'TEST', locale: 'en_US'})
	.then(function (data) {
	  console.log(data);
	})
	.catch(function (err) {
	  console.error(err);
	});

//get afflicate program information on tax and shipping 
Shop.apnTaxShipping({prodIds: '834207132', quantity: '1', state: 'MA', zip:'02148', city:'Malden', country:'United States', street:'999 Maple St'})
	.then(function (data) {
  		console.log(data);
	})
	.catch(function (err) { 			
		console.error(err);		
	});  
```

#Reference
- [Product Service](https://developer.shop.com/documentation/ProductService)
- [Search Service](https://developer.shop.com/documentation/SearchService)
- [Affiliate Publisher Network](https://developer.shop.com/documentation/apnResources)

#License
[MIT](http://spdx.org/licenses/MIT)
