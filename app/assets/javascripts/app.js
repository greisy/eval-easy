angular.module('evalEasy', [
  'ui.router',
  'templates',
  'Devise', 
  'validation.match'
  ])
  .config(function ($stateProvider, $urlRouterProvider, AuthProvider) {
    var cancan = function(state, Auth) {
        if (!Auth.isAuthenticated()){
          state.go('sign_in');
        }
      };
/*    AuthProvider.parse(function(response){
      return response.data.user;
    });*/
    //$urlRouterProvider.otherwise("/");
    $stateProvider
      .state('sign_in',{
        url: '/iniciar_sesion',
        templateUrl: 'views/auth/_sign_in.html',
        controller: 'AuthCtrl'
      })
      .state('sign_up',{
        url: '/registrarse',
        templateUrl: 'views/auth/_sign_up.html',
        controller: 'AuthCtrl'
      })
      .state('institutions',{
        url: '/',
        templateUrl: 'views/institutions/_index.html',
        controller: 'InstitutionIndexCtrl',
        onEnter: ['$state','Auth', function($state, Auth){
          cancan($state, Auth);
        }]
      });
  });