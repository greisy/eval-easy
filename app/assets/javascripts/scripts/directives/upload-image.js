angular.module('evalEasy')
  .directive('uploadImage',function(){
    return{
      restrict: "E",
      templateUrl: 'views/directives/upload-image.html',
      scope: {},
      link: function(scope, element, attr){
        scope.readUrl = function(image){
          debugger
        };
      }
    }
  });