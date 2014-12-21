app.directive("editDir",function(){
    return{
        restrict:"E",
        scope:{
            editItem:"=",
            updateItem:"&"
        },
        replace: true,
        templateUrl: "app/templates/edittemplate.html",

        link:function(scope,elm,attrs){
            scope.submit=function(editItem){  // on submission of form click call update method
               scope.updateItem({arg1: editItem});
                // scope.$apply("updateItem()");
            }
        },
        contorller:function(scope){
            $scope.prodcuts;

        }
    }
});


 app.directive('myDirective', function() {
    return {
        scope: { someCtrlFn: '&callbackFn' },
        link: function(scope, element, attrs) {
            scope.someCtrlFn({arg1: 22});
        },
    }
});
