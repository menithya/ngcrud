var app = angular.module( "assignment", ['ui.router','firebase']);

// app.config(function ($routeProvider)
// {
//     $routeProvider
//         .when('/products',
//         {
//             controller:'productController',
//             templateUrl:'app/templates/products.html'
//         }
//         )
//          .when('/edit/:id',
//         {
//                 controller:'editController',
//                 templateUrl:'app/templates/editproduct.html'
//         })
//         .otherwise({ redirectTo: '/products' });
// });


app.config(function($stateProvider, $urlRouterProvider) {
    console.log("stateProvider")
    
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
            controller:'editController'
        })
        
        
        
});

