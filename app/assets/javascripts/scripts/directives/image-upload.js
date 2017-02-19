angular.module('evalEasy')
  .directive('imageUpload',function(){
    return{
      restrict: "E",
      templateUrl: 'views/directives/image-upload.html',
      scope: {},
      link: function(scope, element, attr){
        scope.readUrl = function(image){
          debugger
        };
      }
    }
  });