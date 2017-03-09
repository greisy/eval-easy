angular.module('evalEasy')
  .directive('teachersCreate', ['Auth', 'TeacherFactory', function(auth, TeacherFactory){
    return{
      restrict: 'E',
      templateUrl: 'views/teachers/_teachers-create.html',
      scope: {
        institution_id: "@info"
      },
      link: function(scope, element, attrs, ctrl){
        scope.teachers = {};
        scope.addNewTeachers = function(){
          scope.teachers.institution_id = scope.institution_id;
          scope.teachers.role_id = 3;
          TeacherFactory.create_teachers(scope.teachers, scope.institution_id).then(function(response){

          }, function(response){

          });
        }
      }
    }
  }]);
/*
  var teachersNew = new TeacherFactory(scope.teaches);
teachersNew.$save({institution_id: institution})
  .then(function(data){
    console.log("teachers added");
  }).catch(function(teacher){
    console.log("failed");
  });*/