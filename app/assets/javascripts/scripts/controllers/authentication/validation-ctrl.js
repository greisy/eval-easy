angular.module("evalEasy")
  .controller('ValidationCtrl', ['$scope', '$state', 'Auth','$stateParams', function($scope, $state, Auth, $stateParams){
    //$scope.id = $stateParams.id;
    $scope.reset_password_token = $stateParams.reset_password_token;
    $scope.user = {};
    console.log('id' + $scope.id);
    console.log('reset_password_token' + $stateParams.reset_password_token);
    $scope.activate = function(){
      var parameters = {
        password: $scope.user.password,
        password_confirmation: $scope.user.password_confirmation,
        reset_password_token: $scope.reset_password_token
      }
      Auth.resetPassword(parameters).then(function(new_data){
        $state.go('sign_in');
      }, function(error){
        debugger

      });
    };
    $scope.canSubmitSign = function(){
      return $scope.sign.$valid;
    };
  }]);