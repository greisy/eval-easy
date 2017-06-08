angular.module('evalEasy')
  .factory('PlanningFactory', ['$http', function($http){
    return {
      create: function(object, environment_id){
        return $http.post('/environments/'+environment_id+'/academic_terms', object); 
      }
    };
  }])