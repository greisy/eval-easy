angular
  .module('evalEasy')
      .controller('AuthCtrl',['$scope', '$state','Auth','InstitutionFactory', function($scope, $state, Auth, InstitutionFactory){
        var config = {
          headers: {
            'X-HTTP-Method-Override': 'POST'
          }
        };

        $scope.institutions = [];

        InstitutionFactory.getAll().then(function(results){
          $scope.institutions = results.data;
        }, function(error){
          console.log(error);
        });


        $scope.register = function(){
          debugger
          var admin_role = 1;
          $scope.user.role_id = admin_role;
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
            $scope.error = error.data.error;
          });
        };
        $scope.canSubmitSign = function(){
          return $scope.sign.$valid;
        };
      }]);