angular
  .module('evalEasy')
      .controller('AuthCtrl',['$scope', '$state','Auth', function($scope, $state, Auth){
        var config = {
          headers: {
            'X-HTTP-Method-Override': 'POST'
          }
        };
        $scope.register = function(){
          $scope.user.role_id = 1;
          Auth.register($scope.user, config).then(function(registeredUser){
            console.log("User registered"+registeredUser);
            $state.go("institutions");
          }, function(error){
            console.log("An error has happened");
          });
        };
        $scope.login = function(){
          Auth.login($scope.user, config).then(function(data){
            console.log(data);
            $state.go("institutions");
          }, function(error){
            debugger
            $scope.error = error.data.error;
          });
        };
        $scope.canSubmitSignUp = function(){
          return $scope.sign_up.$valid;
        };


      }]);