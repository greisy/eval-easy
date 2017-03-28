angular
  .module('evalEasy').factory('TeacherFactory', ['$http', '$resource', function($http, $resource){
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
      }, 
      update: function(object){
        return $http.put("/evaluator_agents/"+object.id, object);
      },
      toggle_authorized: function(object){
        return $http.patch("/evaluator_agents/"+object.id+"/toggle_authorized", object);
      }
    }
  }]);