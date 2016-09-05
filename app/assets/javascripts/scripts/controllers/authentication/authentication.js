angular
  .module('evalEasy')
      .controller('AuthCtrl',['$scope', '$state','Auth', function($scope, $state, Auth){
        var config = {
          headers: {
            'X-HTTP-Method-Override': 'POST'
          }
        };
        $scope.register = function(){

          Auth.register($scope.user, config).then(function(registeredUser){
            console.log("User registered"+registeredUser);
            $state.go("institutions");
          }, function(error){
            console.log("An error has happened");
          });
        };
        $scope.login = function(){
          debugger
          Auth.login($scope.user, config).then(function(data){
            console.log(data);
            $state.go("institutions");
          }, function(error){
            console.log(error);
          });
        };



      }]);