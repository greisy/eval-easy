angular
  .module("evalEasy")
    .controller("NavCtrl",['$state','$scope', 'Auth', 'EnvironmentFactory','localStorageService',function($state,$scope, Auth, Environment, localStorageService){
      var config = {
      	headers: {
      		'X-HTTP-Method-Override': 'DELETE'
      	}
      };
      $scope.logout= Auth.logout;
      /*Auth.currentUser().then(function (user){
      	$scope.user = user;
        $scope.signedIn = Auth.isAuthenticated();
      });*/

    	$scope.$on('devise:new-registration', function (e, user){
        $scope.user = user;
      });
    	$scope.$on('devise:login', function (e, user){
        if(localStorageService.isSupported){
          if(!(jQuery.isEmptyObject(localStorageService.get('user')))){
            $scope.user = localStorageService.get('user');
          }else{
            localStorageService.set('user', user);
            $scope.user = user;
          }
            Environment.all(user).then(function(response){
              environments = response.data;
              if(!(jQuery.isEmptyObject(localStorageService.get('current_environment')))){
                $scope.institution = localStorageService.get('current_environment');
              }else{
                localStorageService.set('current_environment', environments[0]);
                $scope.institution = localStorageService.get('current_environment');
              }

              if(!(jQuery.isEmptyObject(localStorageService.get('environments')))){
                $scope.institutions = localStorageService.get('environments');
              }else{
                localStorageService.set('environments', environments);
                $scope.institutions = localStorageService.get('environments');
              }
          });
        }else{
          console.log('error in localStorageService');
        }
        $scope.signedIn = Auth.isAuthenticated();
      });
      $scope.$on('devise:logout', function (e, user){
      	$scope.user = {};
        $scope.environment = {};
        $scope.environments = [];
        localStorageService.set('user', $scope.user);
        localStorageService.set('current_environment', $scope.environment);
        localStorageService.set('environments', $scope.environments);
      	$scope.signedIn = Auth.isAuthenticated();
        $state.go('sign_in');
      });

    }]);
    /*
            EnvironmentUser.all(user).then(function(response){
          debugger
          for(environment_user in response.data){
            debugger
            if(environment_user.role_name == "Coordinador"){
              $scope.institution = environment_user.environment_name;
            }
          }
          //$scope.institution = Institution.get({id: user.institution_id});
        }, function(response){

        });*/