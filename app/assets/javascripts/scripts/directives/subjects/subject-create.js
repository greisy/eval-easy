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
                debugger
                //$scope.errors = [subject.data.error];
                console.log("Failed");
              });
          });
        }
        scope.fillGradeToPass = function(strg){
          if ( !(strg.scale == null)){
            if(strg.scale.scale_type.name=="alfabetica"){
              scope.alphabetic_scales = [];
              var alphabetic_scale = {};
              var alphabetics = strg.scale.alphabetic_scale.split(";");
              for(var i=0;i< alphabetics.length; i++){
                alphabetic_scale.id = i+1;
                alphabetic_scale.name = alphabetics[i];
                scope.alphabetic_scales.push(alphabetic_scale);
                alphabetic_scale = {};
              }
            }else if(strg.scale.scale_type.name=="por descripcion"){
              scope.description_scales = [];
              var description = {};
              var descriptions = strg.scale.description.split(";");
              for(var i=0;i< descriptions.length; i++){
                description.id = i+1;
                description.name = descriptions[i];
                scope.description_scales.push(description);
                description = {};
              }
            }
          }
        }
      }
    }
  }]);
