angular
  .module("evalEasy")
    .controller("NavCtrl",['$scope', 'Auth',function($scope, Auth){
      debugger
      $scope.signedIn = Auth.isAuthenticated();
    }]);