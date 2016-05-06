angular.module('sima')
.factory('UserService', function($http, $q, $rootScope) {    
  
    var deferred = $q.defer();
    var promise = deferred.promise;
    var response = [];
    var service = {};
    var modelPath = "usuario/";

    service.login = function(userInfo) {
        var q = $q.defer();
        var query = $rootScope.serviceUrl+'auth/login';
        console.log(query);
        
        var info={
            usuario:userInfo.user,
            password:userInfo.password
        };

        $http.post(query,info).then(function(response){
            user=response.data;
            q.resolve(response.data);          
        },function(err){
            q.reject(err);
        });

        return q.promise;  
    };
    service.getByRFC =function(RFC){
    	var q = $q.defer();        
        var query =$rootScope.serviceUrl+modelPath+"getByRFC/"+RFC;

        console.log(query);
        $http.get(query).success(function(data){
            q.resolve(data);
        });
        return q.promise;

    }
    service.getUsersById =function(ids){
    	var q = $q.defer();        
        var query =$rootScope.serviceUrl+modelPath+"getById/";

        console.log(query);
        $http.post(query,{"ids":ids}).success(function(data){
            q.resolve(data);
        });
        return q.promise;

    }
    service.logOut = function(userInfo) {
        var q = $q.defer();
        var query = $rootScope.serviceUrl+'auth/logout';
        console.log(query);

        $http.get(query).then(function(response){
            q.resolve(response.data);          
        },function(err){
            q.reject(err);
        });

        return q.promise;  
    };

    service.addUsuario = function(user,password) {
        var q = $q.defer();
        var query = $rootScope.serviceUrl+'usuario';
        console.log(query);

        if(password){
            var info={
                usuario:user,
                password:password
            };
        }else{
            var info={
                usuario:user,
                password:password
            }
        }
        
        $http.post(query,info).then(function(response){
          q.resolve(response.data);        
        },function(err){
            q.reject(err);
        });
        return q.promise; 
    };

    service.getUser= function(){
    	return JSON.parse(localStorage.getItem('user'));
    }

    service.setUser= function(user){
        localStorage.setItem('user', JSON.stringify(user));
    }
    
    return service;
});