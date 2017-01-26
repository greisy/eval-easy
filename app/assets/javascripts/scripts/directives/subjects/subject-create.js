angular.module("evalEasy")
  .directive('subjectCreate', ['SubjectFactory','Auth','ScaleFactory', function(SubjectFactory, auth, scale){
    return{
      restrict: 'E',
      templateUrl: 'views/subjects/_subject-create.html',
      scope: {},
      link: function(scope, element, attrs, ctrl){
        scope.scales = scale.query();
        scope.subject = {};
        scope.addNewSubject = function(){
          auth.currentUser().then(function(user){
            scope.subject.institution_id = user.institution_id;
            var subjectNew = new SubjectFactory(scope.subject);
            subjectNew.$save({institution_id: user.institution_id})
              .then(function(data){
                scope.$emit('SubjectCreated', 'Subject created');
              }).catch(function(subject){
                //$scope.errors = [subject.data.error];
                console.log("Failed");
              });
          });
        }
        scope.fillGradeToPass = function(strg){
          debugger
          if ( !(strg.scale == null)){
            if(strg.scale.scale_type.name=="alfabetica"){
              scope.alphabetic_scales = strg.scale.alphabetic_scale.split(";");
            }else if(strg.scale.scale_type.name=="por descripcion"){
              scope.description_scales = strg.scale.description.split(";");
            }
          }
        }
      }
    }
  }]);
