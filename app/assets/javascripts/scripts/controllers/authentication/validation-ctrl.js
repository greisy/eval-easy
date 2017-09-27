angular.module("evalEasy")
  .controller('ValidationCtrl', ['$scope', '$state', 'Auth','$stateParams', function($scope, $state, Auth, $stateParams){
    //$scope.id = $stateParams.id;
    $scope.reset_password_token = $stateParams.reset_password_token;
    $scope.user = {};
    console.log('id' + $scope.id);
    console.log('reset_password_token' + $stateParams.reset_password_token);
    $scope.activate = function(){
      debugger
      var parameters = {
        password: $scope.user.password,
        password_confirmation: $scope.user.password_confirmation,
        reset_password_token: $scope.reset_password_token
      }
      Auth.resetPassword(parameters).then(function(new_data){
        $state.go('sign_in');
      }, function(error){
        $scope.errors = [];
        for(var key in error.data.errors){
          $scope.errors.push(error.data.errors[key][0]);
        }
        console.log("An error has happened");
      });
    };
    $scope.sendResetPassword = function(){
      var parameters = {
        email: $scope.user.email
      };
      Auth.sendResetPasswordInstructions(parameters).then(function(){
      });

      $scope.$on('devise:send-reset-password-instructions-successfully', function(event){
        Materialize.toast("Se ha enviado instrucciones para recuperar contraseña al correo indicado", 6000);
        $state.go('sign_in');
      });

    };

    $scope.canSubmitSign = function(){
      return $scope.sign.$valid;
    };
  }]);