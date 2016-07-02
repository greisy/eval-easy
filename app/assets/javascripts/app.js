angular.module('evalEasy', [
  'ui.router'

  // custom modules

  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    //$urlRouterProvider.otherwise("/");
    $stateProvider
      .state('institutions',{
        url: '/',
        templateUrl: 'views/institutions/index.html',
        controller: 'InstitutionIndexCtrl'
      });
  });