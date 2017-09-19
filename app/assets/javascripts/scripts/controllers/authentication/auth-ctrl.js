angular
  .module('evalEasy')
      .controller('AuthCtrl',['$scope', '$state','Auth','EnvironmentFactory','localStorageService', function($scope, $state, Auth,Environment, localStorageService){
        $scope.signedIn = Auth.isAuthenticated();
        var config = {
          headers: {
            'X-HTTP-Method-Override': 'POST'
          }
        };
        $scope.login = function(){
          Auth.login($scope.user, config).then(function(data){
            console.log(data);
            Environment.all(data).then(function(response){
              environments = response.data;
              if(jQuery.isEmptyObject(localStorageService.get('current_environment'))){
                localStorageService.set('current_environment', environments[0]);
              }

              if(jQuery.isEmptyObject(localStorageService.get('environments'))){
                localStorageService.set('environments', environments);
              }
              $state.go("subjects");
            },function(response){
              console.log("There has had an error on the server");
            });
          }, function(error){
            $scope.error = error.data.error;
          });
        };
        $scope.canSubmitSign = function(){
          return $scope.sign.$valid;
        };
      }]);


/*
Role.query().$promise.then(function(roles){
  roles.forEach( function (role){
    if(role.permission_level == 3){
      $scope.environment.role_id = role.id;
    }
  });

});
*/