app.controller('productController', function ($scope,$routeParams, productServFact){
    $scope.products;
    productServFact.getProudcts().success(function(res){
        $scope.products = res.products;
    });

});

