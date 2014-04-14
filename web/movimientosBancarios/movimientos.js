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
});