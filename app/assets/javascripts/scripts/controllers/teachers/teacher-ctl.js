angular.module('evalEasy')
  .controller('TeacherCtrl', ['Auth','$scope', '$state', 'ScaleFactory', 'TeacherFactory', 'localStorageService', function(auth, $scope, $state, ScaleFactory, Teacher, localStorageService){
    $scope.document_types = ScaleFactory.query();
    Teacher.all(localStorageService.get('current_environment').id, 'Docente').then(function(response){
      $scope.teachers = response.data;
    },function(response){

    });
    $scope.$on('UserCreated', function(event, data){
      $scope.teachers.push(data);
    });
    $scope.$on('UsersCreated', function(event, data){
      data.forEach(function(user){
        $scope.teachers.push(user);
      });
    });
    $scope.editTeacher = function(teacher){
      var id= "#"+teacher.id;
      $(id+" .collapsible-header").addClass("teal lighten-4");
      $scope.$broadcast('editUser', teacher);
    };
    $scope.$on('UserEdited', function(event, data){
      $("#"+data.id+" .collapsible-header").addClass("teal lighten-4");
        for(var i= 0; i< $scope.teachers.length; i++){
          if($scope.teachers[i].id == data.id){
            $scope.teachers[i] = data;
            break;
          }
        }
      });
  }]);
  /*
    auth.currentUser().then(function(user){
      $scope.user = user;

      

    });
    $scope.editTeacher = function(teacher){
      var id= "#"+teacher.id;
      $(id+" .collapsible-header").addClass("teal lighten-4");
      $scope.$broadcast('editTeacher', teacher);
    };
    $scope.switchAuthorized = function(teacher){
      TeacherFactory.toggle_authorized(teacher).success(function(data, status, headers, config){
        if(data.authorized){
          Materialize.toast('Se ha habilitado el agente evaluador correctamente', 4000);
        }else{
          Materialize.toast('Se ha deshabilitado el agente evaluador correctamente', 4000);
        }
        for(var i= 0; i< $scope.teachers.length; i++){
          if($scope.teachers[i].id == data.id){
            $scope.teachers[i] = data;
            break;
          }
        }
        
      })
      .error(function(data, status, header, config){
        console.log("Ocurrió un error");
      });
    };
  }]);




      /*
    $scope.$on('TeacherCreated', function(event, data){
      debugger
          Auth.currentUser().then(function (user){
            TeacherFactory.all($scope.user.institution_id).then(function(response){
              $scope.teachers = response.data;
            },function(response){
            });
          });
        });*/
    /*$scope.$on('TeacherCreated', function(event, data){
      $scope.$broadcast('teacherListUpdated', 'enviando desde el padre');
    });*/