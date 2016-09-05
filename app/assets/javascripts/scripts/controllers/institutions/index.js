angular
    .module('evalEasy')
        .controller('InstitutionIndexCtrl', function($scope, $state, InstitutionFactory){
            $scope.institutions = [];

            InstitutionFactory.getAll().then(function(results){
                $scope.institutions = results.data;

            }, function(error){
                console.log(error);
            });
        });