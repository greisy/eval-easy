angular.module('evalEasy')
  .factory('InstitutionFactory', ['$http', function($http){
    return{
      create: function(object){
        return $http.post('/institutions', object);
      },
      all: function(){
        return $http({method: 'GET', url: '/institutions'})
      }
    }
  }]);