app.config(function($routeProvider) {
    $routeProvider.when('/cuentasBancarias/cuentasBancarias',
            {
                templateUrl: 'cuentasBancarias/cuentasBancarias.html',
                controller: "CuentasBancariasController"
            }
    );
});
app.controller("CuentasBancariasController", function($scope, $routeParams) {
    $scope.nombrePagina = "cuentasBancarias";
});