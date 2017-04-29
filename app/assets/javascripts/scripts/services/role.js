angular
  .module('evalEasy').factory('RoleFactory', ['$resource', function($resource){
    return $resource("/roles",{} , {});
  }]);
