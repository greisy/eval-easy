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
        scope.edit = false;
        scope.addNewTeacher = function(){
          scope.teacher.institution_id = scope.info;
          scope.teacher.role_id = 3;
          scope.teacher.password = "11223344";
          TeacherFactory.create(scope.teacher, scope.info).then(function(response){
             Materialize.toast('Se ha agregado el agente evaluador correctamente', 4000);
             scope.teacher={};
             scope.$emit('TeacherCreated', 'Teacher created');
          }, function(response){
            console.log("Failed adding a new teacher");
          });
        }
        scope.$on('editTeacher', function(event, data){
          debugger
          scope.teacher = data;
          scope.edit = true;
          angular.element(document).find("form#teacherForm label").addClass("active");
        });
        scope.addEfect = function(){
          scope.edit = false;
          scope.teacher = {};
          angular.element(document).find("form#teacherForm label").removeClass("active");
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