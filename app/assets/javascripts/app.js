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

    function is_user_sign_in($state, Auth){
      debugger
      return Auth.currentUser().then(function(user){
        debugger
        $state.go('degrees');
      }, function(_error){
        debugger
        console.log("The user is not authenticated");
      });
    }
    function CheckForAuthenticatedUser($state, Auth){
      debugger
      return Auth.currentUser().then(function(user){
        debugger
        return user;
      }, function(_error){
        debugger
        $state.go('sign_in');
      });
    }
/*    AuthProvider.parse(function(response){
      return response.data.user;
    });*/
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('sign_in',{
        url: '/iniciar_sesion',
        templateUrl: 'views/auth/_sign_in.html',
        controller: 'AuthCtrl',
        resolve: {
          uno: is_user_sign_in
        }
      })
      .state('sign_up',{
        url: '/registrarse',
        templateUrl: 'views/auth/_sign_up.html',
        controller: 'RegistrationCtrl',
        resolve: {
          dos: is_user_sign_in 
        }
      })
      .state('change_password',{
        url: '/cambiar_password/:id?reset_password_token',
        templateUrl: 'views/auth/_activation.html',
        controller: 'ValidationCtrl',
        resolve: {
          tres: is_user_sign_in
        }
      })
      .state('degrees',{
        url: '/degrees',
        templateUrl: 'views/degrees/_index.html',
        //controller: 'DegreeCtrl', //Se colocaran en un solo controlador los metodos CRUD
        resolve: {
          cuatro: CheckForAuthenticatedUser
        }
      })
      .state('subjects',{
        url: '/subjects',
        templateUrl: 'views/subjects/_index.html',
        controller: 'SubjectCtrl', //Se colocaran en un solo controlador los metodos CRUD
        resolve: {
          cinco: CheckForAuthenticatedUser
        }
      })
      .state('teachers',{
        url: '/teachers',
        templateUrl: 'views/teachers/_index.html',
        controller: 'TeacherCtrl', //Se colocaran en un solo controlador los metodos CRUD
        resolve: {
          seis: CheckForAuthenticatedUser
        }
      })
      .state('students',{
        url: '/students',
        templateUrl: 'views/students/_index.html',
        controller: 'StudentCtrl', //Se colocaran en un solo controlador los metodos CRUD
        resolve:{
          siete: CheckForAuthenticatedUser
        }
      })
      .state('planning',{
        url: '/planning',
        templateUrl: 'views/plannings/dashboard_planning',
        controller: 'PlanningCtrl',
        resolve: {
          ocho: CheckForAuthenticatedUser
        }      
      });
      //$locationProvider.html5Mode(true);
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  }]);