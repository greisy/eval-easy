angular
    .module('evalEasy').factory('InstitutionFactory',['$resource', function ($resource){
    	return $resource("/institutions/:id", {}, {});
    }]);