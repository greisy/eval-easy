angular
  .module('evalEasy').factory('DocumentTypeFactory', ['$resource', function($resource){
    return $resource("/document_types", {}, {});
  }]);