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
            $scope.cuentas = [
        {
            nombre: "BBVA",
            idEntidad: 3,
            codigo: "46"
        },
        {
            nombre: "BANKIA",
            idEntidad: 7,
            codigo: "03"
        },
        {
            nombre: "Caja Mar",
            idEntidad: 5,
            codigo: "66"
        }

    ];
});