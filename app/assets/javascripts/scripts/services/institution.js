angular
    .module('evalEasy').factory('InstitutionFactory',['$http', function ($http){
      var institutions = {};

      institutions.getAll = function(){
        return $http.get('/institutions');
      };

      return institutions;
    }]);