angular
  .module('evalEasy').factory('RangeDateTermFactory', ['$http', function($http){
    return{
      all: function(environment_id){
        return $http.get('/environments/'+environment_id+'/range_date_terms');
      }
    }
  }]);