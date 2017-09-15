angular
  .module('evalEasy')
    .controller('PlanningCtrl',['$scope', '$state', 'PlanningFactory', 'SubjectFactory','localStorageService', function($scope, $state, Planning, Subject, localStorageService){
      debugger
      Subject.all(localStorageService.get('current_environment').id).then(function(response){
          $scope.subjects = response.data;
        },function(response){

        });

      $scope.range_date_term = {};
      //$scope.selected_subjects = '';
      $scope.addNewPlanning = function(){
      //scope.academic_term = $scope.subjects;
      scope.academic_term.range_date_term = $scope.range_date_term;
      Planning.create(scope.academic_term, localStorageService.get('current_environment').id).then(function(response){
          $state.go('planning');
          //var message = "Se ha agregado el "+ scope.kind_user+ " correctamente";
          //Materialize.toast(message, 4000);
          $scope.subjects=[];
          $scope.range_date_term = {};
          $scope.errors = [];
          scope.$emit('UserCreated', response.data);
        }, function(response){
          scope.errors = [];
          for(var key in response.data){
            scope.errors.push(response.data[key][0]);
          }
          console.log("Failed adding a new teacher");
        });
      };
    }]);