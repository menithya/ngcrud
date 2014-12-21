app.controller('editController', function ($scope,$routeParams,$stateParams, productServFact,$location){
     $scope.products;
     productServFact.getProudcts().success(function(res){
        $scope.products = res.products;
         var prodctId = parseInt($stateParams.id);     
        if(prodctId > -1){
            $scope.editItem =  angular.copy( $scope.products[prodctId -1])
        }
       
    });

     $scope.editSave = function(editItem){
                var product = editItem
            // $location.path("#/products")
     }

})