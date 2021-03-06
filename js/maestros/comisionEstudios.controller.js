/**
 * Created by joseantoniocartagena on 19/04/16.
 */
angular.module('sima')
    .controller('comisionEstudiosController', function($scope, $http) {
        $scope.asignaturas = [];
        $scope.asignatura = {};
        $scope.crear = function () {
            $scope.asignaturas.push({
                nombre: $scope.asignatura.nombre,
                tipo: $scope.asignatura.tipo,
                actividad: $scope.asignatura.nombreEspecifico,
                producto: $scope.asignatura.fechaInicio,
                horas: $scope.asignatura.fechaGraduacion,
                fechaAutorizacion: $scope.asignatura.fechaAutorizacion,
                aportes: $scope.asignatura.aportes
            });
        }
    });