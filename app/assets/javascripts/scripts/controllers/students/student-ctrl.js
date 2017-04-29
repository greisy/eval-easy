angular.module('evalEasy')
  .controller('StudentCtrl', ['Auth', '$scope', '$state', 'UserFactory', 'localStorageService', function(Auth, $scope, $state, User, localStorageService){
    User.all(localStorageService.get('current_environment').id, 'Estudiante').then(function(response){
      $scope.students = response.data;
    }, function(response){
    });
    $scope.$on('UserCreated', function(event, data){
      $scope.students.push(data);
    });
    $scope.$on('UsersCreated', function(event, data){
      data.forEach(function(user){
        $scope.students.push(user);
      });
    });
    $scope.editStudent = function(student){
      var id= "#"+student.id;
      $(id+" .collapsible-header").addClass("teal lighten-4");
      $scope.$broadcast('editUser', student);
    };
    $scope.$on('UserEdited', function(event, data){
      $("#"+data.id+" .collapsible-header").addClass("teal lighten-4");
        for(var i= 0; i< $scope.students.length; i++){
          if($scope.students[i].id == data.id){
            $scope.students[i] = data;
            break;
          }
        }
      });
  }]);