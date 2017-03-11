angular.module("evalEasy")
  .directive("teacherList", ['TeacherFactory', function(TeacherFactory){
    return{
      restrict: "E",
      templateUrl: 'views/teachers/_list.html',
      scope: {
        info: "="
      },
      link: function(scope, element, attrs, ctrl){
        console.log("aqui va un mensaje");
        console.log(scope.info);
        debugger
        TeacherFactory.all(scope.info).then(function(response){
          scope.teachers = response.data;
        },function(response){

        });
      }
    }
  }]);