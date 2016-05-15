var assert = require('assert');
var Shop = require('../lib').initShop({
	apikey: 'xxxxxxxxxxxxxx'
});


describe('Products Service', function(){
  describe('#products()', function(){
   	it('respond with matching records in product: 874694776', function() {
   		var testProId = 874694776;
   		var testSKU = "700-FIXIE";
		return Shop.products("874694776", {allperms: "false"}).then(function(data){
			assert.deepEqual(data.cashBack.prodId, testProId);
			assert.deepEqual(data.sku, testSKU);
		});
	});
  })
});



describe('Search Service', function(){
  describe('#search()', function(){
   	it('respond with matching records in term: socks', function() {
   		var testTerm = "socks";
   		var testCategory = "Clothes";
		return Shop.search("socks", {page: 1, count:1}).then(function(data){
			assert.deepEqual(data.thisQuery, testTerm);
			assert.deepEqual(data.narrowedCategory, testCategory);
		});
	});
  })
});



