app.config(function($routeProvider) {
    $routeProvider.when('/sucursalesBancarias/sucursalesBancarias',
            {
                templateUrl: 'sucursalesBancarias/sucursalesBancarias.html',
                controller: "SucursalesBancariasController"
            }
    );
});
app.controller("SucursalesBancariasController", function($scope, $routeParams){
    $scope.nombrePagina = "sucursalesBancarias";
});