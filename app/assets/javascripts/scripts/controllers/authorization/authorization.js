angular
  .module('evalEasy')
      .controller('AuthorizationCtrl',['$state','Auth', function($state, Auth){
        return{
          cancan: function(){
            console.log("entro en el controlador autorizacion");
            return true;
          }
        };
      }]);
