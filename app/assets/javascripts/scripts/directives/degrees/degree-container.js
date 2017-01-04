angular.module("evalEasy")
  .directive('degreeContainer', function(){
    return {
      restrict: 'E',
      templateUrl: 'views/degrees/_container.html',
      scope: {},
      controller: function($scope, $element, $attrs, $transclude) {
        $scope.flag = false;
        this.getFlag = function(){
          return $scope.flag;
        }
        this.setFlag = function(flag){
          $scope.flag = flag;
        }
      },
      link: function($scope, iElm, iAttrs, controller) {
        $scope.$on('flag', function(event, data){
          $scope.$broadcast('dispara', 'enviando desde el padre');
        });
      }
    };
  });