angular.module('evalEasy')
  .controller('TeacherCtrl', ['Auth','$scope', '$state', 'ScaleFactory', 'TeacherFactory', function(auth, $scope, $state, ScaleFactory, TeacherFactory){
    $scope.document_types = ScaleFactory.query();
    auth.currentUser().then(function(user){
      $scope.user = user;
      TeacherFactory.all($scope.user.institution_id).then(function(response){
          $scope.teachers = response.data;
        },function(response){

        });
      $scope.$on('TeacherCreated', function(event, data){
        TeacherFactory.all($scope.user.institution_id).then(function(response){
          $scope.teachers = response.data;
        },function(response){

        });
      });
      $scope.$on('TeacherEdited', function(event, data){
        $("#"+data.id+" .collapsible-header").addClass("teal lighten-4");
        for(var i= 0; i< $scope.teachers.length; i++){
          if($scope.teachers[i].id == data.id){
            $scope.teachers[i] = data;
            break;
          }
        }
      });
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