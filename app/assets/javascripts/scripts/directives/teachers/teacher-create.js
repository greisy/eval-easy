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
          scope.teacher.document_type_id = parseInt(scope.teacher.document_type_id);
          TeacherFactory.create(scope.teacher, scope.info).then(function(response){
             Materialize.toast('Se ha agregado el agente evaluador correctamente', 4000);
             scope.teacher={};
             scope.$emit('TeacherCreated', 'Teacher created');
          }, function(response){
            console.log("Failed adding a new teacher");
          });
        }
        scope.$on('editTeacher', function(event, data){
          scope.teacher = angular.copy(data);
          //scope.backupTeacher = data;
          scope.teacher.document_type_id = String(data.document_type_id);
          scope.edit = true;
          angular.element(document).find("form#teacherForm label").addClass("active");
        });
        scope.addEfect = function(){
          scope.edit = false;
          scope.teacher = {};
          angular.element(document).find("form#teacherForm label").removeClass("active");
        };
        scope.saveTeacher = function(){
          if (scope.edit){
            scope.editTeacher();
          }else{
            scope.addNewTeacher();
          }
        };
        scope.editTeacher = function(){
          TeacherFactory.update(scope.teacher).success(function(data, status, headers, config){
            Materialize.toast('Se ha editado el agente evaluador correctamente', 4000);
            //scope.backupTeacher = data;
            var id = "#"+ data.id;

            scope.$emit('TeacherEdited', data);
          })
          .error(function(data, status, header, config){
            console.log("Ocurrió un error");
          });
        };
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