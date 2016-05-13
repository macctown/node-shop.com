var request = require('request');
var queryString = require('query-string');

const baseUrl = 'https://api.shop.com';

var Shop = function(opts){
    this.apikey = opts.apikey;
    return this;
}


Shop.prototype.call = function(resource, params, callback) {
	const promise = new Promise(
		function(resolve, reject){
   		var queryParams = "?" + queryString.stringify(params);
		 	request.get(baseUrl + resource + queryParams, function(error, response, body) {
		 		 if (error) return reject(error);
		          const data = JSON.parse(body);
		          resolve(data);
		 		}
	 		);
		}
	);


    if (typeof callback === 'function') {
        promise.then(
        	function(res){
        		callback(null, res)
        	})
        .catch(callback);
      return null;
    }
    return promise;
};

/**
 *
 * URL: https://developer.shop.com/documentation/ProductService
 *
 * Search product by ID
 *
 * @method    products
 * @memberOf  Products Service
 *
 * @example
 * 	Shop.products('8573924', {allperms: false})
 *	    .then(function (data) {
 *	      console.log(data);
 *	    })
 *	    .catch(function (err) {
 *	      console.error(err);
 *	    });
 *
 * @param   {String}     prodId    product ID.
 * @param   {Key: Value} params    parameters.
 * @param   {Function}   [cb]      Callback function.
 *
 * @return  {Promise}
 */
Shop.prototype.products = function(prodId, params, callback){
	var resource = "/stores/v1/products/" + prodId;
	params.apikey = this.apikey;
	return this.call(resource, params, callback);
};


/**
 *
 * URL: https://developer.shop.com/documentation/SearchService
 *
 * Search products by terms.
 *
 * @method    search
 * @memberOf  Search Service
 *
 * @example
 * 	Shop.search("socks", {page: 1, count:1})
 *	    .then(function (data) {
 *	      console.log(data);
 *	    })
 *	    .catch(function (err) {
 *	      console.error(err);
 *	    });
 *
 * @param   {String}     term      keywords.
 * @param   {Key: Value} params    parameters.
 * @param   {Function}   [cb]      Callback function.
 *
 * @return  {Promise}
 */
Shop.prototype.search = function(term, params, callback){
	var resource = "/sites/v1/search/term/" + term;
	params.apikey = this.apikey;
	return this.call(resource, params, callback);
};


/**
 *
 * URL: https://developer.shop.com/documentation/apnResources/categories
 *
 * This resource allows a user to get all shop.com product categories for a given locale. 
 * Any category’s ID can be passed into the Search resource categoryID input to search for 
 * products within that category. Each category also has a hypermedia link that will perform 
 * a search within that category.
 *
 * @method    apnCategory
 * @memberOf  Affiliate Service
 *
 * @example
 * 	Shop.apnCategory({publisherID: 'TEST', locale: 'en_US'})
 * 		.then(function (data) {
 *  		console.log(data);
 *		})
 *		.catch(function (err) {
 * 			console.error(err);
 *		});
 *
 * @param   {Key: Value} params    parameters.
 * @param   {Function}   [cb]      Callback function.
 *
 * @return  {Promise}
 */
Shop.prototype.apnCategory = function(params, callback){
	var resource = "/AffiliatePublisherNetwork/v1/categories";
	params.apikey = this.apikey;
	return this.call(resource, params, callback);
};


/**
 *
 * URL: https://developer.shop.com/documentation/apnResources/products
 *
 * This resource allows a user to search shop.com products by any combination of 
 * search term, category, brand, seller, and price range. The search will return a 
 * list of matching products. The id element of any of these product objects can be 
 * passed in as productID input of the Detail resource. Each product also has a hypermedia 
 * link that will get the detail for that product. In addition, a search will also return 
 * a list of categories, brands, sellers, and price ranges. These represent options for 
 * narrowing a search. You can pass the IDs of these objects into the categoryId, brandId, 
 * sellerId, and priceRangeId of the Search resource inputs to search within them.
 *
 * @method    apnProduct
 * @memberOf  Affiliate Service
 *
 * @example
 * 	Shop.apnProduct({publisherID: 'TEST', locale: 'en_US', perPage: '15'})
 * 		.then(function (data) {
 *  		console.log(data);
 *		})
 *		.catch(function (err) {
 * 			console.error(err);
 *		});
 *
 * @param   {Key: Value} params    parameters.
 * @param   {Function}   [cb]      Callback function.
 *
 * @return  {Promise}
 */
Shop.prototype.apnProduct = function(params, callback){
	var resource = "/AffiliatePublisherNetwork/v1/products";
	params.apikey = this.apikey;
	return this.call(resource, params, callback);
};

/**
 *
 * URL: https://developer.shop.com/documentation/apnResources/products
 *
 * This resource allows a user to search shop.com products by any combination of 
 * search term, category, brand, seller, and price range. The search will return a 
 * list of matching products. The id element of any of these product objects can be 
 * passed in as productID input of the Detail resource. Each product also has a hypermedia 
 * link that will get the detail for that product. In addition, a search will also return 
 * a list of categories, brands, sellers, and price ranges. These represent options for 
 * narrowing a search. You can pass the IDs of these objects into the categoryId, brandId, 
 * sellerId, and priceRangeId of the Search resource inputs to search within them.
 *
 * @method    apnProductById
 * @memberOf  Affiliate Service
 *
 * @example
 * 	Shop.apnProductById('834207132', {publisherID: 'TEST', locale: 'en_US'})
 * 		.then(function (data) {
 *  		console.log(data);
 *		})
 *		.catch(function (err) {
 * 			console.error(err);
 *		});
 *
 * @param   {String}     proId     productId.
 * @param   {Key: Value} params    parameters.
 * @param   {Function}   [cb]      Callback function.
 *
 * @return  {Promise}
 */
Shop.prototype.apnProductById = function(proId, params, callback){
	var resource = "/AffiliatePublisherNetwork/v1/products/"+proId;
	params.apikey = this.apikey;
	return this.call(resource, params, callback);
};


/**
 *
 * URL: https://developer.shop.com/documentation/apnResources/taxandshipping
 *
 * The APN Tax and Shipping service receives at minimum a product ID, quantity and a zip code. 
 * It will return a JSON array of tax and shipping costs sorted from lowest to highest shipping 
 * costs. If the “total” attribute is 0 in a shipping method instance, then the shipping for that 
 * method and the quantity/product combination is free. This may be the result of a business rule 
 * such as “orders for $99 or more get free shipping”. A business rule like this will result in at 
 * least one shipping method having 0 costs.
 *
 *
 * @method    apnTaxShipping
 * @memberOf  Affiliate Service
 *
 * @example
 * 	Shop.apnTaxShipping({prodIds: '834207132', quantity: '1', state: 'MA', zip:'02148', city:'Malden', country:'United States', street:'999 Maple St'})
 * 		.then(function (data) {
 *  		console.log(data);
 *		})
 *		.catch(function (err) {
 * 			console.error(err);
 *		});
 *
 * @param   {Key: Value} params    parameters.
 * @param   {Function}   [cb]      Callback function.
 *
 * @return  {Promise}
 */
Shop.prototype.apnTaxShipping = function(params, callback){
	var resource = "/AffiliatePublisherNetwork/v1/taxandshipping";
	params.apikey = this.apikey;
	return this.call(resource, params, callback);
};


module.exports.initShop = function(opts) {
  return new Shop(opts);
};



