angular
  .module('evalEasy').factory('TeacherFactory', ['$http', '$resource', function($http, $resource){
    return{
      all: function(environment_id, kind_user){
        return $http({method: 'GET', url: '/environments/'+environment_id+'/environment_users',
                    params: {kind_user: kind_user }});
      },
      create: function(object, environment_id){
        return $http.post('/environments/'+environment_id+'/environment_users', object);
      },
      create_teachers: function(environment_user, teachers, environment_id){
        teachers.append('environment_user',  angular.toJson(environment_user));

        return $http({method: 'POST',
                      url: '/environments/'+environment_id+'/environment_users/create_environment_users',
                      headers : { 'Content-Type': undefined},
                      data: teachers,
                      transformRequest: angular.identity
                      });
      },
      update: function(object){
        return $http.put('/environment_users/'+object.user.environment_user_id, object);
      },
      toggle_authorized: function(object){
        return $http.patch("/evaluator_agents/"+object.id+"/toggle_authorized", object);
      }
    }
  }]);

          /*$http.post('/environments/'+environment_id+'/environment_users/create_environment_users',
                          object, {
                          withCredentials: true,
                          headers: {'Content-Type': undefined },
                          transformRequest: angular.identity
        });*/