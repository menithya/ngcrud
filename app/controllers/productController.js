app.controller('productController', function ($scope,$stateParams, productServFact){
    $scope.products = productServFact.getProudcts();
    var prodctId = parseInt($stateParams.id);   

    if(prodctId > -1){
        $scope.editItem =  $scope.products[prodctId];
    }

    $scope.editSave = function(editItem){
        productServFact.updateProduct(editItem);
    }

});

