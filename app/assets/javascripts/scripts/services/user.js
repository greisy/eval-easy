angular
  .module('evalEasy').factory('UserFactory', ['$http', '$resource', function($http, $resource){
    return{
      all: function(environment_id, kind_user){
        return $http({method: 'GET', url: '/environments/'+environment_id+'/environment_users',
                    params: {kind_user: kind_user }});
      },
      create: function(object, environment_id){
        return $http.post('/environments/'+environment_id+'/environment_users', object);
      },
      create_users: function(environment_user, users, environment_id){
        users.append('environment_user',  angular.toJson(environment_user));

        return $http({method: 'POST',
                      url: '/environments/'+environment_id+'/environment_users/create_environment_users',
                      headers : { 'Content-Type': undefined},
                      data: users,
                      transformRequest: angular.identity
                      });
      },
      update: function(object){
        return $http.put('/environment_users/'+object.user.environment_user_id, object);
      },
      toggle_authorized: function(object){
        return $http.patch("/evaluator_agents/"+object.id+"/toggle_authorized", object);
      },
      delete: function(object){
        return $http.delete('environment_users/'+object.environment_user_id);
      }
    }
  }]);