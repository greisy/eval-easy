/*angular
    .module('evalEasy').factory('DegreeFactory',['$http', function ($http){
    	return {
        all: function (institution){
          return $http({method: "GET", url: "/institutions/" + institution_iddegrees", params: {institution_id: institution}});
        }
      }
    }]);*/
angular
  .module('evalEasy').factory('DegreeFactory', ['$resource', function($resource){
    return $resource("/institutions/:institution_id/degrees",{} , {});
  }]);