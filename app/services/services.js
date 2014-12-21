app.factory("productServFact",function($http,productDataSouce){
    return {
        getProudcts: function() {
            var product = $http({method:"GET",url:"app/models/products.json"});
            return product;
        }
    };
});


app.factory('productDataSouce',function(){
	return{
		setProductData:function(product){
			var product = product;
			return product;
		}
	}
})