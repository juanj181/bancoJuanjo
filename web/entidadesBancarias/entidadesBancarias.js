app.config(function($routeProvider) {
    $routeProvider.when('/entidadesBancarias/entidadesBancarias',
            {
                templateUrl: 'entidadesBancarias/entidades.html',
                controller: "EntidadesBancariasController"
            }
    );
});
app.controller("EntidadesBancariasController", function($scope, $routeParams) {
    $scope.nombrePagina = "entidadesBancarias";
});