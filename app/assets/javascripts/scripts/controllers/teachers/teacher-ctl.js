angular.module('evalEasy')
  .controller('TeacherCtrl', ['Auth','$scope', '$state', 'ScaleFactory', function(auth, $scope, $state, ScaleFactory){
    $scope.document_types = ScaleFactory.query();
    auth.currentUser().then(function(user){
      $scope.user = user;
    });
  }]);