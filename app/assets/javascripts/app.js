angular.module('evalEasy', [
  'ui.router',
  'templates'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    //$urlRouterProvider.otherwise("/");
    $stateProvider
      .state('institutions',{
        url: '/',
        templateUrl: 'views/institutions/_index.html',
        controller: 'InstitutionIndexCtrl'
      });
  });