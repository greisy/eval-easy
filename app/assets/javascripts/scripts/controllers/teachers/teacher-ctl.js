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
        debugger
        TeacherFactory.all($scope.user.institution_id).then(function(response){
          $scope.teachers = response.data;
        },function(response){

        });
      })
    });
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

  }]);