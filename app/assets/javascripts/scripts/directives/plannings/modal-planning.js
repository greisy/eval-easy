angular.module('evalEasy')
  .directive('modalPlanning', function(PlanningFactory, $state, SubjectFactory, localStorageService){
    return{
      restrict: 'E',
      templateUrl: 'views/plannings/_new.html',
      scope: {
      },
      link: function(scope, element, attrs, ctrl){
        angular.element(document).find("#new_planning").on('click', function(){
          SubjectFactory.all(localStorageService.get('current_environment').id).then(function(response){
            scope.subjects = response.data;
          });
        });
        scope.addNewPlanning = function(){
          scope.academic_term = {};
          scope.academic_term.subjects = scope.selected_subject;
          scope.academic_term.range_date_term = scope.range_date_term;
          PlanningFactory.create(scope.academic_term, localStorageService.get('current_environment').id).then(function(response){
            angular.element(document).find("#add_planning").modal('close');
            $state.go('planning.show', {id: response.data.id});
          //var message = "Se ha agregado el "+ scope.kind_user+ " correctamente";
          //Materialize.toast(message, 4000);
          scope.subjects=[];
          scope.range_date_term = {};
          scope.errors = [];
          //scope.$emit('UserCreated', response.data);
        }, function(response){
          scope.errors = [];
          for(var key in response.data){
            scope.errors.push(response.data[key][0]);
          }
          console.log("Failed adding new planning ");
          });
        };
      }
    }
  });