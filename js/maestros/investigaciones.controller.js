/**
 * Created by joseantoniocartagena on 19/04/16.
 */
angular.module('sima')
    .controller('investigacionesController', function($scope, $http) {
        $scope.asignaturas = [];
        $scope.asignatura = {};
        $scope.crear = function () {
            $scope.asignaturas.push({
                nombre: $scope.asignatura.nombre,
                tipo: $scope.asignatura.tipo,
                actividad: $scope.asignatura.actividad,
                producto: $scope.asignatura.producto,
                horas: $scope.asignatura.horas,
                coordinacion: $scope.asignatura.coordinacion
            });
        }
    });