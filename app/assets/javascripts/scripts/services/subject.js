angular
  .module('evalEasy').factory('SubjectFactory', ['$resource', function($resource){
    return $resource("/institutions/:institution_id/subjects",{} , {});
  }]);
