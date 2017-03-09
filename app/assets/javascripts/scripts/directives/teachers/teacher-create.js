angular.module('evalEasy')
  .directive('teacherCreate', ['Auth','DocumentTypeFactory','TeacherFactory', function(auth, DocumentTypeFactory, TeacherFactory){
    return{
      restrict: 'E',
      templateUrl: 'views/teachers/_teacher-create.html',
      scope: {
        info: "@"
      },
      link: function(scope, element, attrs, ctrl){
        scope.document_types = DocumentTypeFactory.query();
        scope.teacher = {};
        scope.addNewTeacher = function(){
          scope.teacher.institution_id = scope.info;
          scope.teacher.role_id = 3;
          scope.teacher.password = "11223344";
          TeacherFactory.create(scope.teacher, scope.info).then(function(response){
            console.log("Teacher added");
          }, function(response){
            console.log("Failed adding a new teacher");
          });

          // add institution id and role
          /*auth.currentUser().then(function(user){
            debugger
            scope.teacher.institution_id = user.institution_id;
            scope.teacher.role_id = 3;
            scope.teacher.password="123456789";
            TeacherFactory.create(scope.teacher, user.institution_id).then(function(response){
              console.log("Teacher added");
            }, function(response){
              console.log("Failed adding new teacher");
            });
          });*/
        }
      }
    }
  }]);

  /*var teacherNew = new TeacherFactory(scope.teacher);
  teacherNew.$save({institution_id: user.institution_id})
    .then(function(data){
      console.log("Teacher added");
    }).catch(function(teacher){
      console.log("Failed");
    });
});

TeacherFactory.create(scope.teacher, user.institution_id).success(function(data){
    console.log("Teacher added");
  });
*/