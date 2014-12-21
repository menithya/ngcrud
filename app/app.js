var app = angular.module( "assignment", ['ui.router','firebase']);
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/products');
    $stateProvider
        .state('products', {
            url: '/products',
            templateUrl:'app/templates/products.html',
            controller:'productController',
        })
        .state("edit",{
            url:"/edit/:id",
            templateUrl:'app/templates/editproduct.html',
            controller:'productController'
        })
});

