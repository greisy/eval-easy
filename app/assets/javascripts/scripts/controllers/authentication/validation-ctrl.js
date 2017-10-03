angular.module("evalEasy")
  .controller('ValidationCtrl', ['$scope', '$state', 'Auth','$stateParams', function($scope, $state, Auth, $stateParams){
    $scope.confirmation_token = $stateParams.confirmation_token;
    
    $scope.user = {};
    $scope.user.id = $stateParams.id;
    console.log('id' + $scope.user.id);
    console.log('confirmation_token' + $stateParams.confirmation_token);
    $scope.activate = function(){
      var parameters = {
        password: $scope.user.password,
        password_confirmation: $scope.user.password_confirmation,
        reset_password_token: $scope.confirmation_token,
        id: $scope.user.id
      }
      Auth.resetPassword(parameters).then(function(new_data){
        $state.go('sign_in');
        Materialize.toast("Se ha modificado la contraseña correctamente, por favor iniciar sesión para validar el cambio", 6000);
      }, function(error){
        $scope.errors = [];
        for(var key in error.data.errors){
          $scope.errors.push(error.data.errors[key][0]);
        }
        console.log("An error has happened");
      });
    };
    $scope.sendResetPasswordInstructionsPassword = function(){
      var parameters = {
        email: $scope.user.email
      };
      Auth.sendResetPasswordInstructions(parameters).then(function(){
      });

      $scope.$on('devise:send-reset-password-instructions-successfully', function(event){
        Materialize.toast("Se ha enviado instrucciones para recuperar su contraseña al correo indicado", 6000);
        $state.go('sign_in');
      });

    };

    $scope.canSubmitSign = function(){
      return $scope.sign.$valid;
    };
  }]);