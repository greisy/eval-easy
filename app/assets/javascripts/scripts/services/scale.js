angular
    .module('evalEasy').factory('ScaleFactory',['$resource', function ($resource){
      return $resource("/scales", {}, {});
    }]);