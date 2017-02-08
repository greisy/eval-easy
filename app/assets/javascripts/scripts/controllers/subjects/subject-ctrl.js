angular
    .module('evalEasy')
        .controller('SubjectCtrl', ['$scope','$state',function($scope, $state){
          $scope.$on('SubjectCreated', function(event, data){
            $scope.$broadcast('subjectListUpdate','enviando desde el padre');
          });
        }]);
