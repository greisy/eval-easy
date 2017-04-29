angular.module('evalEasy')
  .directive('usersCreate', ['Auth', 'UserFactory', 'localStorageService', 'RoleFactory', function(auth, User, localStorageService, Role){
    return{
      restrict: 'E',
      templateUrl: 'views/users/_users-create.html',
      scope: {
        institution_id: "@info",
        kindUser: "@"
      },
      link: function(scope, element, attrs, ctrl){
        scope.users = {};
        scope.environment_user = {};
        scope.addNewUsers = function(){
          scope.errors = null;
          scope.environment_user.environment_id = localStorageService.get('current_environment').id;
          Role.query().$promise.then(function(roles){
            roles.forEach( function (role){
              if(role.description == scope.kindUser){
                scope.environment_user.role_id = role.id;
              }
            });
            User.create_users(scope.environment_user,scope.users, localStorageService.get('current_environment').id).then(
              function(response){
                var message= 'Se agregáron los ' + scope.kindUser +'s correctamente!';
                Materialize.toast(message, 4000);
                scope.teachers = {};
                scope.$emit('UsersCreated', response.data);
            }, function(response){
              scope.errors = response.data.result;
              console.log(response);
            });
          });
        };
        scope.savingFile = function(files){
          scope.users = new FormData();
          scope.users.append("file", files[0]);
        };
        scope.cleanErrors = function(){
          scope.errors = null;
        }
      }
    }
  }]);
