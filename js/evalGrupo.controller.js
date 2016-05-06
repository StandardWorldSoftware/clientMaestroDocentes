/**
 * Created by joseantoniocartagena on 24/04/16.
 */
angular.module('sima')
    .controller('evalGrupoController', function($scope,$http) {
        $scope.asignaturas = {};
        $scope.asignaturaGrupo = {};
        $scope.grupoByAsignatura = {};
        $scope.grupoNumero = {};
        $scope.nota = null;
        $scope.getAsignaturas = function(){
            $http.get('/asignatura').then(function(res){
                $scope.asignaturas = res.data;
            });
        }
        $scope.asignaturaSelected = function () {
            $http.get('http://localhost:8100/evalGrupo?codigo=' + $scope.asignaturaGrupo.codigo).then(function(result){
               $scope.grupoByAsignatura = result.data;

            });
        }
        $scope.crear = function(){
            var info = {
                id: $scope.grupoNumero.id,
                nota: $scope.nota
            }
            $http.post('http://localhost:8100/evalGrupo', info).then(function(result){
                console.log(result);
            });
        }

        $scope.getAsignaturas();
    });