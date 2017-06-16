angular
  .module("evalEasy")
    .controller("NavCtrl",['$state','$scope', 'Auth', 'EnvironmentFactory','localStorageService','SubjectFactory','RangeDateTermFactory',function($state,$scope, Auth, Environment, localStorageService, Subject, RangeDateTerm){
      var config = {
      	headers: {
      		'X-HTTP-Method-Override': 'DELETE'
      	}
      };
      $scope.logout = Auth.logout;
      /*Auth.currentUser().then(function (user){
      	$scope.user = user;
        $scope.signedIn = Auth.isAuthenticated();
      });*/
    	$scope.$on('devise:login', function (e, user){
        if(localStorageService.isSupported){
          if(!(jQuery.isEmptyObject(localStorageService.get('user')))){
            $scope.user = localStorageService.get('user');
          }else{
            localStorageService.set('user', user);
            $scope.user = user;
          }
        }else{
          console.log('error in localStorageService');
        }
        $scope.signedIn = Auth.isAuthenticated();
      });
      $scope.set_values = function(){
        Subject.all(localStorageService.get('current_environment').id).then(function(response){
          $scope.subjects = response.data;
        },function(response){

        });
        if(!(jQuery.isEmptyObject(localStorageService.get('current_environment')))){
          $scope.institution = localStorageService.get('current_environment');
          RangeDateTerm.all(localStorageService.get('current_environment').id).then(function(response) {
            $scope.range_date_terms = response.data;
          });
        }

        if(!(jQuery.isEmptyObject(localStorageService.get('environments')))){
          $scope.institutions = localStorageService.get('environments');
        }
      };

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
      $scope.environmentSubject = function(){

      };
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