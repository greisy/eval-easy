angular
    .module('evalEasy').factory('DegreeFactory',['$resource', function ($resource){
    	return $resource("/degrees/:id", {}, {});
    }]);