//Product Service
//http://ssg-api.shop.com/stores/v1/products/874694776?allperms=false&siteId=123
//prodID, allperms, siteId


//Search Service
//http://ssg-api.shop.com/sites/v1/search/term/socks?page=1&count=1
//term, page, count


//APN categories
//https://api.shop.com:8443/AffiliatePublisherNetwork/v1/categories?publisherID=TEST&locale=en_US
//publisherID, locale


//APN Products
//https://api.shop.com:8443/AffiliatePublisherNetwork/v1/products?publisherID=TEST&locale=en_US&perPage=15
//publisherID, locale, start, perPage, term. categoryId, brandId, sellerId, priceRangeId
//https://api.shop.com:8443/AffiliatePublisherNetwork/v1/products/834207132?publisherID=TEST&locale=en_US
//productID, publisherID, locale


//APN Tax and Shipping
//https://api.shop.com:8443/AffiliatePublisherNetwork/v1/taxandshipping?prodIds=123
//prodIds, quantity, state, zip, city, country, street



var Shop = require('node-shop.com').initShop({
	apikey: 'YOUR_API_KEY'
});

Shop.products('874694776', {allperms: false})
	.then(function (data) {
	  console.log(data);
	})
	.catch(function (err) {
	  console.error(err);
	});


Shop.search("socks", {page: 1, count:1})
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.error(err);
    });


Shop.apnCategory({publisherID: 'TEST', locale: 'en_US'})
	.then(function (data) {
	  console.log(data);
	})
	.catch(function (err) {
	  console.error(err);
	});

Shop.apnProduct({publisherID: 'TEST', locale: 'en_US', perPage: '15'})
	.then(function (data) {
	  console.log(data);
	})
	.catch(function (err) {
	  console.error(err);
	});


Shop.apnProductById('874694776', {publisherID: 'TEST', locale: 'en_US'})
	.then(function (data) {
	  console.log(data);
	})
	.catch(function (err) {
	  console.error(err);
	});

Shop.apnTaxShipping({prodIds: '834207132', quantity: '1', state: 'MA', zip:'02148', city:'Malden', country:'United States', street:'999 Maple St'})
	.then(function (data) {
  		console.log(data);
	})
	.catch(function (err) { 			
		console.error(err);		
	});