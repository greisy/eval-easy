angular
  .module('evalEasy').factory('TeacherFactory', ['$http', function($http){
    return{
      all: function(institution_id){
        return $http({method: 'GET', url: '/institutions/'+institution_id+'/evaluator_agents'});
      },
      create: function(object, institution_id){
        return $http.post('/institutions/'+institution_id+'/evaluator_agents', object);
      },
      create_teachers: function(object, institution_id){
        return $http.post('/institutions/'+institution_id+'/evaluator_agents/create_teachers',
                          object, {
                          withCredentials: true,
                          headers: {'Content-Type': undefined },
                          transformRequest: angular.identity
        });
      }
    }
  }]);