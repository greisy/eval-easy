angular
  .module("evalEasy")
    .controller("NavCtrl",['$state','$scope', 'Auth','InstitutionFactory',function($state,$scope, Auth, Institution){
      var config = {
      	headers: {
      		'X-HTTP-Method-Override': 'DELETE'
      	}
      };
      
      $scope.logout= Auth.logout;
      $scope.institution = {};
      Auth.currentUser().then(function (user){
      	$scope.user = user;
        $scope.signedIn = Auth.isAuthenticated();
      });

    	$scope.$on('devise:new-registration', function (e, user){
        $scope.user = user;
      });
    	$scope.$on('devise:login', function (e, user){
        $scope.user = user;
        $scope.institution = Institution.get({id: user.institution_id});
        $scope.signedIn = Auth.isAuthenticated();
      });
      $scope.$on('devise:logout', function (e, user){
      	$scope.user = {};
      	$scope.signedIn = Auth.isAuthenticated();
        $state.go('sign_in');
      });

    }]);