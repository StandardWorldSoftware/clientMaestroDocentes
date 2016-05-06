/**
 * Created by joseantoniocartagena on 24/04/16.
 */
angular.module('sima')
    .controller('AsignaturaController', function($scope,$http) {
        $scope.asignatura = {};
        $scope.getAsignaturas = function(){
            $http.get('/asignatura').then(function(res){
                $scope.asignatura = res;
                console.log(res);
            });
        }
        $scope.crear = function(){
            var info = {
                asignatura:{
                    codigo: $scope.asignatura.codigo,
                    nombre: $scope.asignatura.nombre,
                    horas_semana: $scope.asignatura.horas
                }
            };
            $http.post('/asignatura', info).then(function (res) {
                if(res.data.message == undefined){
                    alert("Asignatura creada");
                    $scope.getAsignaturas();

                }else{
                    alert("código o asignatura ya creadas");
                }
            });
        }
        $scope.getAsignaturas();
    });