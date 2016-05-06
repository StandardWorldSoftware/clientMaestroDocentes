angular.module('sima')
.controller('AddUserController', function($scope,$http) {

	$scope.user = {};
	$scope.addUsuario = function(){
		if($scope.user.password == $scope.user.password2){
			var info = {
				user:{
					userName: $scope.user.userName,
					nombres: $scope.user.nombres,
					apellidos: $scope.user.apellidos,
					tipo: $scope.user.tipo,
					area: $scope.user.area,
					dedicacion: $scope.user.dedicacion,
					urlFirma: $scope.user.firma,
					password: $scope.user.password,
					email: $scope.user.email
				}
			}

			$http.post('http://localhost:8100/login/register', info).then(function (response){
				if(response.data.message == undefined){
					alert("Usuario creado correctamente !");
				}else{
					alert("Error, esa cédula ya existe");
				}
			});
		}else{
			alert("Las contraseñas no son iguales");
		}
	}
});