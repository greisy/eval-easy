angular
  .module('evalEasy').factory('SubjectFactory', ['$http', function($http){
    return{
      all: function(environment_id){
        return $http({method: 'GET', url: '/environments/'+environment_id+'/subjects'});
      },
      create: function(object, environment_id){
        return $http.post('/environments/'+environment_id+'/subjects', object);
      },
      update: function(object){
        return $http.put('/subjects/'+object.id, object);
      }
    }
  }]);
/*    return{ 
      $resource("/environments/:environment_id/subjects",{} , {}
    })
      //
    return{
      all: function(environment_id){
        return $http({method: 'GET', url: '/environments/'+environment_id+'/subjects'});
      }
    }*/