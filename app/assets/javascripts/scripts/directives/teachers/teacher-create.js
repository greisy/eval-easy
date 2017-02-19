angular.module('evalEasy')
  .directive('teacherCreate', ['Auth', function(auth){
    return{
      restrict: 'E',
      templateUrl: 'views/teachers/_teacher-create.html',
      scope: {},
      link: function(scope, element, attrs, ctrl){
        scope.teacher = {};
        scope.addNewTeacher = function(){
          
        };
      }
    }
  }]);