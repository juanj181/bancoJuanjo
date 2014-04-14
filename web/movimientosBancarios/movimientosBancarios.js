app.config(function($routeProvider) {
    $routeProvider.when('/movimientosBancarios/movimientosBancarios',
            {
                templateUrl: 'movimientosBancarios/movimientosBancarios.html',
                controller: "MovimientosBancariosController"
            }
    );
});
app.controller("MovimientosBancariosController", function($scope, $routeParams) {
    $scope.nombrePagina = "movimientosBancarios";
            $scope.cuentas = [
        {
            nombre: "Compra_mercadona",
            idCuenta: 3,
            codigo: "46"
        },
        {
            nombre: "Compra_leroyMerlin",
            idCuenta: 7,
            codigo: "03"
        },
        {
            nombre: "Compra_online",
            idCuenta: 5,
            codigo: "66"
        }

    ];
});