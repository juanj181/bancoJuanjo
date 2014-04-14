var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider.otherwise(
            {
                redirectTo: 'entidadesBancarias'

            }
    );
});

app.controller("IndexController", function($scope){

    
});