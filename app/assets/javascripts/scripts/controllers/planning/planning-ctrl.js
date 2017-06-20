angular
  .module('evalEasy')
    .controller('PlanningCtrl',['$scope', '$state', 'PlanningFactory', 'SubjectFactory','localStorageService', '$stateParams', function($scope, $state, Planning, Subject, localStorageService, $stateParams){
      if($stateParams.id){
        var range_date_term_id = $stateParams.id;
        Planning.all(range_date_term_id).then(function(response){
          $scope.result = response.data;
          $scope.selectedSubjects = [];
          $scope.result.academic_term.subjects.forEach(function(subject_object){
            $scope.selectedSubjects.push(subject_object.id);
          });
        });
        Subject.all(localStorageService.get('current_environment').id).then(function(response){
          $scope.subjects = response.data;
        });
      }
  }]);