angular.module('sima')
.controller('LoginController', function($rootScope,$scope,UserService,$location, $http) {
  	$scope.userInfo = {};
 	$scope.login = function(){
		if($scope.userInfo.user && $scope.userInfo.password){
			var info = {
				user:{
					userName: $scope.userInfo.user,
					password: $scope.userInfo.password
				}
			};
			console.log(info);
			$http.post('http://localhost:8100/login', info).then(function(callback){
				console.log(callback);
				if(callback.data == 'exits'){
					alert('Usuario ingresado');
					localStorage.setItem('user', JSON.stringify($scope.userInfo));
					$location.path('/home');

				}else{
					alert('Usuario o contraseña erroneos');
				}
			});
 		}else{
 			alert("Fill all spaces");
 		}
 	}
});