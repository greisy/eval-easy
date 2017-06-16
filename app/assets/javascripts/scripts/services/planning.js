angular.module('evalEasy')
  .factory('PlanningFactory', ['$http', function($http){
    return {
      create: function(object, environment_id){
        return $http.post('/environments/'+environment_id+'/academic_terms', object); 
      },
      all: function(range_date_term_id){
        return $http.get('/range_date_terms/'+range_date_term_id+'/academic_terms');
      }
    };
  }]);