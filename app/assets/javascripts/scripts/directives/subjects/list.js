angular.module("evalEasy")
  .directive("list", function(){
    return{
      restrict: "E",
      templateUrl: 'views/subjects/_list.html',
      scope: {},
      link: function(scope, element, attrs){
        
      }
    }
  })