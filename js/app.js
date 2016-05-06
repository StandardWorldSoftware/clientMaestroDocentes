angular.module('sima', ['ngRoute', 'ui.date','ui.utils.masks', 'ngMaterial', 'ui.calendar', 'ui.bootstrap'])

	.constant('uiCalendarConfig', {})
	.config(function($routeProvider) {
    $routeProvider

    .when('/login', {
		data: {
	        requireLogin: false
	    },
		templateUrl: 'views/login.html', 

		controller: 'LoginController'})

    .when('/home', {
    	data: {
	        requireLogin: true
	    },
        templateUrl: 'views/home.html'})

    .when('/user', {
    	data: {
	        requireLogin: true
	    },
        templateUrl: 'views/addUser.html', 
        controller: 'AddUserController'
	})

	.when('/asignatura', {
		data: {
			requireLogin: true
		},
		templateUrl: 'views/administracion/asignatura.html',
		controller: 'AsignaturaController'
	})
		.when('/docenciaDirecta', {
			data: {
				requireLogin: true
			},
			templateUrl: 'views/maestros/docenciaDirecta.html',
			controller: 'docenciaDirectaController'
		})
		.when('/investigaciones', {
			data: {
				requireLogin: true
			},
			templateUrl: 'views/maestros/investigaciones.html',
			controller: 'investigacionesController'
		})
		.when('/actividadesExtencion', {
			data: {
				requireLogin: true
			},
			templateUrl: 'views/maestros/actividadesExtencion.html',
			controller: 'actividadesExtencionController'
		})
		.when('/comisionEstudios', {
			data: {
				requireLogin: true
			},
			templateUrl: 'views/maestros/comisionEstudios.html',
			controller: 'comisionEstudiosController'
		})
		//////// NEW ///////
		.when('/publicaciones', {
			data: {
				requireLogin: true
			},
			templateUrl: 'views/maestros/publicaciones.html',
			controller: 'publicacionesController'
		})
		//////// NEW ///////
		.when('/asesoriaProyectos', {
			data: {
				requireLogin: true
			},
			templateUrl: 'views/maestros/asesoriaProyectos.html',
			controller: 'asesoriaProyectosController'
		})
		//////// NEW ///////
		.when('/otrasActividades', {
			data: {
				requireLogin: true
			},
			templateUrl: 'views/maestros/otrasActividades.html',
			controller: 'otrasActividadesController'
		})
		//////// NEW ///////
		.when('/observaciones', {
			data: {
				requireLogin: true
			},
			templateUrl: 'views/maestros/observaciones.html',
			controller: 'asesoriaProyectosController'
		})
		//////// NEW ///////
		.when('/actividadesSemana6', {
			data: {
				requireLogin: true
			},
			templateUrl: 'views/maestros/actividadesSemana6.html',
			controller: 'asesoriaProyectosController'
		})
		//////// NEW ///////
		.when('/actividadesSemana12', {
			data: {
				requireLogin: true
			},
			templateUrl: 'views/maestros/actividadesSemana12.html',
			controller: 'asesoriaProyectosController'
		})
		//////// NEW ///////
		.when('/evaluacionFinal', {
			data: {
				requireLogin: true
			},
			templateUrl: 'views/maestros/evaluacionFinal.html',
			controller: 'asesoriaProyectosController'
		})

		.when('/evalGrupo',{
			data: {
				requireLogin: true
			},
			templateUrl: 'views/administracion/evalGrupo.html',
			controller: 'evalGrupoController'
		});

    
    var notLoged = !localStorage.getItem('user');

	if(!notLoged){
		var user =JSON.parse(localStorage.getItem('user'));
		if(user){
		$routeProvider.otherwise({redirectTo: '/home'});
		}
		else{
			$routeProvider.otherwise({redirectTo: '/login'});
		}
	}else{
		$routeProvider.otherwise({redirectTo: '/login'});
	}
})

.run(function($rootScope,$location) {

  	$rootScope.$on('$routeChangeStart', function(event, toRoute) {

  		if(toRoute.originalPath && toRoute.originalPath!=""){
		  	var requireLogin = toRoute.data.requireLogin;
		  	var notLoged = !localStorage.getItem('user');

		  	if (requireLogin && notLoged){ 
		    	event.preventDefault();
		    	alert("Tienes que haber ingresado para entrar en este lugar");
		    	$location.path('/login');
		  	}
		}
  	})
})

.run(function($rootScope,UserService,$location) {

	$rootScope.notLoged=!localStorage.getItem('user');

	$rootScope.logOut=function(){
			localStorage.removeItem('user');
			$location.path('/login');
			$rootScope.notLoged=true;
			alert(result);
			console.log("log out");
	};

})

.run(function($rootScope,$location) {
	$rootScope.serviceUrl = 'http://localhost:3000/';
	//$rootScope.serviceUrl = 'http://52.34.20.253:3000/';

	$rootScope.errorHandler =function(err){
		if(err.status!=0){
			if(err.status == 403){
				alert("You must to be logged in");
				localStorage.removeItem('user');
				$location.path('/login');
				return;
			}
			alert(err.data);
			return;
		}
		else{
			alert("Ops, Something is wrong. Please check your network connection.");    
			return;
		} 
	}

})

.run(function($rootScope){
	$rootScope.tableStripe = function(i, j){
		if((i-1) == j){
			//console.log(true);
			return true;
		}
		else{
			//console.log(false);
			return false;
		}
	}
	
	
	
});
