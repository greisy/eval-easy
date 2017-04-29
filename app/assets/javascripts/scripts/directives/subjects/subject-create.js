angular.module("evalEasy")
  .directive('subjectCreate', ['SubjectFactory','Auth','ScaleFactory', 'localStorageService', function(Subject, auth, Scale, localStorageService){
    return{
      restrict: 'E',
      templateUrl: 'views/subjects/_subject-create.html',
      scope: {},
      link: function(scope, element, attrs, ctrl){
        scope.scales = Scale.query();
        scope.subject = {};
        scope.addNewSubject = function(){
          scope.subject.environment_id = localStorageService.get('current_environment').id;
          Subject.create(scope.subject, localStorageService.get('current_environment').id ).then(function(response){
            Materialize.toast('Se ha agregado la asignatura correctamente', 4000);
            scope.subject = {};
            scope.$emit('SubjectCreated', response.data);
          }, function(response){
            scope.errors = [];
            for(var key in response.data){
              scope.errors.push(response.data[key][0]);
            }
            console.log("An error has happened");
          });
        };
        scope.fillGradeToPass = function(strg){
          if ( !(strg == null)){
            if(strg.scale_type.name=="alfabetica"){
              scope.alphabetic_scales = [];
              var alphabetic_scale = {};
              var alphabetics = strg.alphabetic_scale.split(";");
              for(var i=0;i< alphabetics.length; i++){
                alphabetic_scale.id = i+1;
                alphabetic_scale.name = alphabetics[i];
                scope.alphabetic_scales.push(alphabetic_scale);
                alphabetic_scale = {};
              }
            }else if(strg.scale_type.name=="por descripcion"){
              scope.description_scales = [];
              var description = {};
              var descriptions = strg.description.split(";");
              for(var i=0;i< descriptions.length; i++){
                description.id = i+1;
                description.name = descriptions[i];
                scope.description_scales.push(description);
                description = {};
              }
            }
          }
        };
        scope.canSubmitSign = function(){
          return scope.sign.$valid;
        };
        scope.saveSubject = function(){
          if (scope.edit){
            scope.editSubject();
          }else{
            scope.addNewSubject();
          }
        };
        scope.editSubject = function(){
          Subject.update(scope.subject).success(function(data, statys, headers, config){
            Materialize.toast('Se ha editado la asignatura correctamente', 4000);
            scope.subject = {};
            scope.$emit('SubjectEdited', data);
          })
          .error(function(data, status, header, config){
            debugger
            scope.errors = [];
            for(var key in data){
              scope.errors.push(data[key][0]);
            }
            console.log("An error has happened");
          });
        };
        scope.addEffect = function(){
          scope.edit = false;
          scope.subject = {};
          angular.element(document).find("form#subjectForm label").removeClass("active");
        };
        scope.$on('fillFormWithSubject', function(event,data){
          scope.subject = angular.copy(data);
          scope.fillGradeToPass(data.scale);
          //scope.subject.scale = data.scale;
          //angular.element(document).find("select#test").click();
          scope.edit = true;
          scope.errors = [];
          angular.element(document).find("form#subjectForm label").addClass("active");
        });
      }
    }
  }]);

  /*
        scope.addNewSubject = function(){
          scope.subject.environment_id = localStorageService.get('current_environment').id;
          var subjectNew = new Subject(scope.subject);
          subjectNew.$save({environment_id: localStorageService.get('current_environment').id})
          .then(function(data){
            Materialize.toast('Se ha agregado la asignatura correctamente', 4000);
            scope.subject = {};
            scope.$emit('SubjectCreated', data);
          }).catch(function(subject){
            //$scope.errors = [subject.data.error];
            scope.errors = [];
            for(var key in subject.data){
              scope.errors.push(subject.data[key][0]);
            }
            console.log("An error has happened");
          });
        };
  */
