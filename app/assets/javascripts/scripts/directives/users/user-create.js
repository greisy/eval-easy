angular.module('evalEasy')
  .directive('userCreate', ['Auth','DocumentTypeFactory','UserFactory', 'localStorageService', 'RoleFactory', function(auth, DocumentTypeFactory, User, localStorageService, Role){
    return{
      restrict: 'E',
      templateUrl: 'views/users/_user-create.html',
      scope: {
        kindUser: "@"
      },
      link: function(scope, element, attrs, ctrl){
        scope.document_types = DocumentTypeFactory.query();
        scope.environment_user = {};
        scope.user = {};
        scope.edit = false;
        scope.addNewUser = function(){
          debugger
          scope.environment_user.environment_id = localStorageService.get('current_environment').id;
          Role.query().$promise.then(function(roles){
            roles.forEach( function (role){
              debugger
              if(role.description == scope.kindUser){
                scope.environment_user.role_id = role.id;
              }
            });
            scope.environment_user.user = scope.user;
            scope.environment_user.user.password = "11223344";
            debugger
            User.create(scope.environment_user, localStorageService.get('current_environment').id).then(function(response){
              var message = "Se ha agregado el "+ scope.kind_user+ " correctamente";
              Materialize.toast(message, 4000);
              scope.user={};
              scope.errors = [];
              scope.$emit('UserCreated', response.data);
            }, function(response){
              scope.errors = [];
              for(var key in response.data){
                scope.errors.push(response.data[key][0]);
              }
              console.log("Failed adding a new teacher");
            });
          });
        }
        scope.$on('editUser', function(event, data){
          scope.user = angular.copy(data);
          //scope.backupTeacher = data;
          scope.edit = true;
          angular.element(document).find("form#userForm label").addClass("active");
        });
        scope.addEfect = function(){
          scope.edit = false;
          scope.user = {};
          angular.element(document).find("form#userForm label").removeClass("active");
        };
        scope.saveUser = function(){
          if (scope.edit){
            scope.editUser();
          }else{
            scope.addNewUser();
          }
        };
        scope.editUser = function(){
          scope.environment_user = {};
          scope.environment_user.user = scope.user;
          User.update(scope.environment_user).success(function(data, status, headers, config){
            var message= "Se ha editado el "+scope.kindUser+" correctamente";
            Materialize.toast(message, 4000);
            //scope.backupTeacher = data;
            var id = "#"+ data.id;
            scope.user = {};
            scope.$emit('UserEdited', data);
          })
          .error(function(data, status, header, config){
            console.log("Ocurrió un error");
          });
        };
      }
    }
  }]);

  /*var teacherNew = new TeacherFactory(scope.teacher);
  teacherNew.$save({institution_id: user.institution_id})
    .then(function(data){
      console.log("Teacher added");
    }).catch(function(teacher){
      console.log("Failed");
    });
});

TeacherFactory.create(scope.teacher, user.institution_id).success(function(data){
    console.log("Teacher added");
  });
*/


          // add institution id and role
          /*auth.currentUser().then(function(user){
            debugger
            scope.teacher.institution_id = user.institution_id;
            scope.teacher.role_id = 3;
            scope.teacher.password="123456789";
            TeacherFactory.create(scope.teacher, user.institution_id).then(function(response){
              console.log("Teacher added");
            }, function(response){
              console.log("Failed adding new teacher");
            });
          });*/