angular.module('evalEasy')
  .directive('modalPlanningEdit', function(){
    return{
      replace: false,
      restrict: 'E',
      templateUrl: 'views/plannings/edit.html',
      scope: {
        rangeDateTerm: "=",
        selectedSubjects: "=",
        subjects: "="
      },
      controller: function($scope){
        this.setSubject = function(){
          debugger

        };
        this.getSelectedSubjects = function(){
          return $scope.selectedSubjects;
        };
        this.removeSubject = function(){
          debugger
        };
      },
      link: function(scope, element, attrs, ctrl){

      }
    }
  });