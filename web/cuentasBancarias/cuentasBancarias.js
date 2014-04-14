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
        $scope.cuentas = [
        {
            nombre: "Juanjo",
            idCuenta: 3,
            codigo: "46"
        },
        {
            nombre: "Jose",
            idCuenta: 7,
            codigo: "03"
        },
        {
            nombre: "Lorena",
            idCuenta: 5,
            codigo: "66"
        }

    ];
});