var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider.otherwise(
            {
                redirectTo: 'index'

            }
    );
});

app.controller("IndexController", function($scope){
    

    
});