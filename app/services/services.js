//Factory service for getting product data
app.factory("productServFact",function($http,$firebase,$location){
    var ref = new Firebase("https://ngcrud.firebaseio.com/products");
    var items = $firebase(ref).$asArray();
    return {
        getProudcts: function() {
            return items;
        },
        updateProduct:function(item){
            items.$save(item);
            $location.path('#/products')
        }
    };
});

