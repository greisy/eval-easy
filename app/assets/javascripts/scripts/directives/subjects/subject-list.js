angular.module("evalEasy")
  .directive("subjectList",['Auth', 'SubjectFactory','localStorageService' , function(Auth, Subject, localStorageService){
    return{
      restrict: "E",
      templateUrl: 'views/subjects/_list.html',
      scope: {},
      link: function(scope, element, attrs){
        //scope.subjects = Subject.query({environment_id: localStorageService.get('current_environment').id});
        debugger
        Subject.all(localStorageService.get('current_environment').id).then(function(response){
          scope.subjects = response.data;
        },function(response){

        });
        scope.$on('addSubjectToList', function(event, data){
          scope.subjects.push(data);
        });
        scope.editSubject = function(subject){
          var id= "#"+subject.id;
          $(id+" .collapsible-header").addClass("teal lighten-4");
          scope.$emit('EditSubject', subject);
        };
        scope.$on('updateListWithSubject', function(event, data){
          for(var i= 0; i< scope.subjects.length; i++){
            if(scope.subjects[i].id == data.id){
              scope.subjects[i] = data;
              break;
            }
          }
        });
      }
    }
  }]);