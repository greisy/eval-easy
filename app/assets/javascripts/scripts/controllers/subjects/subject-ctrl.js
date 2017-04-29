angular
    .module('evalEasy')
        .controller('SubjectCtrl', ['$scope','$state',function($scope, $state){
          $scope.$on('SubjectCreated', function(event, data){
            $scope.$broadcast('addSubjectToList',data);
          });
          $scope.$on('EditSubject', function(event, data){
            $scope.$broadcast('fillFormWithSubject', data);
          });
          $scope.$on('SubjectEdited', function(event, data){
            $scope.$broadcast('updateListWithSubject', data);
          });
        }]);
