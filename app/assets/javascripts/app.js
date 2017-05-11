angular.module('evalEasy', [
  'ui.router',
  'ngResource',
  'templates',
  'Devise', 
  'validation.match',
  'LocalStorageModule'
  ])
  .config(["$locationProvider", "$stateProvider","$urlRouterProvider", "AuthProvider",function ($locationProvider, $stateProvider, $urlRouterProvider, AuthProvider) {
    
    var cancan = function(state, Auth) {
      Auth.currentUser().then(function(user){
      }, function(error){
        state.go('sign_in');
      });
    };
/*    AuthProvider.parse(function(response){
      return response.data.user;
    });*/
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('sign_in',{
        url: '/iniciar_sesion',
        templateUrl: 'views/auth/_sign_in.html',
        controller: 'AuthCtrl'
      })
      .state('sign_up',{
        url: '/registrarse',
        templateUrl: 'views/auth/_sign_up.html',
        controller: 'RegistrationCtrl',
        onEnter: ['$state','Auth', function($state, Auth){
          Auth.currentUser().then(function(){
            $state.go('degrees');
          })
        }]
      })
      .state('change_password',{
        url: '/cambiar_password/:id?reset_password_token',
        templateUrl: 'views/auth/_activation.html',
        controller: 'ValidationCtrl'
      })
      .state('degrees',{
        url: '/degrees',
        templateUrl: 'views/degrees/_index.html',
        //controller: 'DegreeCtrl', //Se colocaran en un solo controlador los metodos CRUD
        onEnter: ['$state','Auth', function($state, Auth){
          cancan($state, Auth);
        }]
      })
      .state('subjects',{
        url: '/subjects',
        templateUrl: 'views/subjects/_index.html',
        controller: 'SubjectCtrl', //Se colocaran en un solo controlador los metodos CRUD
        onEnter: ['$state','Auth', function($state, Auth){
          cancan($state, Auth);
        }]
      })
      .state('teachers',{
        url: '/teachers',
        templateUrl: 'views/teachers/_index.html',
        controller: 'TeacherCtrl', //Se colocaran en un solo controlador los metodos CRUD
        onEnter: ['$state','Auth', function($state, Auth){
          cancan($state, Auth);
        }]
      })
      .state('students',{
        url: '/students',
        templateUrl: 'views/students/_index.html',
        controller: 'StudentCtrl', //Se colocaran en un solo controlador los metodos CRUD
        onEnter: ['$state','Auth', function($state, Auth){
          cancan($state, Auth);
        }]
      })
      .state('planning',{
        url: '/planning',
        templateUrl: 'views/plannings/dashboard_planning',
        controller: 'PlanningCtrl',
        onEnter: ['$state','Auth', function($state, Auth){
          cancan($state, Auth);
        }]        
      });
      //$locationProvider.html5Mode(true);
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  }]);