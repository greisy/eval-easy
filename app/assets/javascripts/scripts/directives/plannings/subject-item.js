angular.module('evalEasy')
  .directive('subjectItem', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/plannings/subject-item.html',
      scope: {
        subject: "="
      },
      require: "^modalPlanningEdit",
      link: function(scope, element, attrs,modalPlanningEdit){
        scope.subjectActive = function(id){

          var flag = false;
          selected_subjects = modalPlanningEdit.getSelectedSubjects();
          for(var i = 0; i< selected_subjects.length; i++){
            if(id == selected_subjects[i]){
              return true;
            }
          }
          return false;
        }
      }
    }
  });