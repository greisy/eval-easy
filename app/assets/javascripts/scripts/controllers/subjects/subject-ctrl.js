angular
    .module('evalEasy')
        .controller('SubjectCtrl', ['$scope','$state',function($scope, $state){
          $scope.$on('SubjectCreated', function(event, data){
            console.log("estoy en el controlador");
            console.log(data);
          });
        }]);
