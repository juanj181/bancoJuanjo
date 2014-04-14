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
            $scope.cuentas = [
        {
            nombre: "Av.Del_Cid",
            idCuenta: 3,
            codigo: "46"
        },
        {
            nombre: "Xirivella",
            idCuenta: 7,
            codigo: "03"
        },
        {
            nombre: "Mislata",
            idCuenta: 5,
            codigo: "66"
        }

    ];
});