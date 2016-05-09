# node-shop.com
[![npm version](https://badge.fury.io/js/node-shop.com.svg)](https://badge.fury.io/js/node-shop.com)

Node.js Module for Shop.com API

#Install
```
npm install --save node-shop.com
```

#Usage
```javascript
//search product by ID - use Product Service
Shop.products(8573924, {allperms: false})
 	    .then(function (data) {
 	      console.log(data);
 	    })
 	    .catch(function (err) {
 	      console.error(err);	  
 	    });
 	    
//search product by keywords - use Search Service
Shop.search("socks", {page: 1, count: 1})
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

#License
[MIT](http://spdx.org/licenses/MIT)
