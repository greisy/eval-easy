angular
  .module("evalEasy")
    .controller("NavCtrl",['$state','$scope', 'Auth',function($state,$scope, Auth){
      var config = {
      	headers: {
      		'X-HTTP-Method-Override': 'DELETE'
      	}
      };
      
      $scope.logout= Auth.logout;
      Auth.currentUser().then(function (user){
      	$scope.user = user;
        $scope.signedIn = Auth.isAuthenticated();
      });

    	$scope.$on('devise:new-registration', function (e, user){
        $scope.user = user;
      });
    	$scope.$on('devise:login', function (e, user){
        $scope.user = user;
        $scope.signedIn = Auth.isAuthenticated();
      });
      $scope.$on('devise:logout', function (e, user){
      	$scope.user = {};
      	$scope.signedIn = Auth.isAuthenticated();
        $state.go('sign_in');
      });

    }]);