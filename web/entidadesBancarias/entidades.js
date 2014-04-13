app.cofig(function($routeProvider) {
    $routeProvider.when('/entidadesBancarias',
            {
                templateUrl: 'entidadesBancarias/entidades.html',
                controller: "EntidadesBancariasController"
            }
    );
});
app.controller("EntidadesBancariasController", function($scope, $routeParams){
    $scope.nombrePagina = "entidadesBancarias";
});