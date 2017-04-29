angular.module('evalEasy')
  .factory('EnvironmentFactory',['$http', function($http){
    return{
      create: function(object){
        return $http.post('/environments', object);
      },
      all: function(user){
        return $http({method: 'GET', url: '/users/'+user.id+'/environments'});
      }
    }
  }]);