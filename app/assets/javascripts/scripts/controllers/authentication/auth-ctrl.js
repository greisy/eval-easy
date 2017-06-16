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
          debugger
          Auth.login($scope.user, config).then(function(data){
            debugger
            console.log(data);
            Environment.all(data).then(function(response){
              debugger
              environments = response.data;
              if(jQuery.isEmptyObject(localStorageService.get('current_environment'))){
                localStorageService.set('current_environment', environments[0]);
              }

              if(jQuery.isEmptyObject(localStorageService.get('environments'))){
                localStorageService.set('environments', environments);
              }
              $state.go("subjects");
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