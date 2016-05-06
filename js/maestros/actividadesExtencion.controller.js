/**
 * Created by joseantoniocartagena on 19/04/16.
 */
angular.module('sima')
    .controller('actividadesExtencionController', function($scope, $http) {
        $scope.asignaturas = [];
        $scope.asignatura = {};
        $scope.crear = function () {
            $scope.asignaturas.push({
                nombre: $scope.asignatura.nombre,
                tipo: $scope.asignatura.fechaInicio,
                actividad: $scope.asignatura.fechaFin,
                producto: $scope.asignatura.extension,
                horas: $scope.asignatura.horas
            });
        }
    });