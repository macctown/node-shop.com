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
 * Search product by ID
 *
 * @method    products
 * @memberOf  Products Service
 *
 * @example
 * 	Shop.products(8573924, {allperms: false})
 *	    .then(function (data) {
 *	      console.log(data);
 *	    })
 *	    .catch(function (err) {
 *	      console.error(err);
 *	    });
 *
 * @param   {Integer}    prodId    product ID.
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



module.exports.initShop = function(opts) {
  return new Shop(opts);
};



