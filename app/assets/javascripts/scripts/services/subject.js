angular
  .module('evalEasy').factory('SubjectFactory', ['$resource', function($resource){
    return $resource("/institutions/:intitution_id/subjects", {}, {})
  }]);