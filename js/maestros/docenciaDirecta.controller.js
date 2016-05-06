/**
 * Created by joseantoniocartagena on 19/04/16.
 */
angular.module('sima')
    .controller('docenciaDirectaController', function($scope, $http) {

        $scope.docenciaDirecta = {};
        $scope.asignatura = {};
        $scope.tableData = {};

        $scope.getData = function () {
            $http.get('http://localhost:8100/asignatura').then(function(response){
                $scope.asignatura = response.data;
            });
        }

        $scope.getTableData = function(){
            $http.get('http://localhost:8100/maestros?user=' + JSON.parse(localStorage.getItem('user')).user).then(function(response){
               $scope.tableData = response.data;
            });
        }

        $scope.crear = function(){
            var info = {
                grupo: {
                        numero: $scope.docenciaDirecta.grupo,
                        docenteUserName: JSON.parse(localStorage.getItem('user')).user,
                        CodigoAsignatura: $scope.docenciaDirecta.codigo.split('-')[1].replace(/\s/g, '')
                }
            };
            $http.post('http://localhost:8100/maestros', info).then(function successCallback(response){
                if(response.data.id){
                    alert("Grupo " + response.data.numero + " asociado con el docente de cédula " +
                        response.data.docenteUserName + " de la asignatura con código " +
                    response.data.CodigoAsignatura);
                    $scope.getTableData();
                }
                else{
                    alert("Esa asignatura ya cuenta con ese grupo");
                }
            });
        }
        $scope.getRandomSpan = function(){
            return Math.floor((Math.random()*30));
        }
        $scope.getRandomSpanNota = function(){
            return Math.floor((Math.random()*5));
        }
        $scope.getData();
        $scope.getTableData();
    });