angular
  .module('evalEasy')
    .controller('RegistrationCtrl', ['$scope', '$state', 'Auth', 'RoleFactory', 'DocumentTypeFactory','InstitutionFactory','EnvironmentFactory', function($scope, $state, Auth, Role, DocumentType, Institution, Environment){
      var config = {
          headers: {
            'X-HTTP-Method-Override': 'POST'
          }
        };
        $scope.user= {};
        $scope.document_types = DocumentType.query();
        Institution.all().then(function(response){
          $scope.institutions = response.data;
        },function(response){
          console.log("Environment get request failed");
        });
        $scope.environment = {};
        $scope.signUp = function(){
          Auth.register($scope.user, config).then(function(registeredUser){
            console.log("User registered"+registeredUser);
            $scope.environment.user_id = registeredUser.id;
            Environment.create($scope.environment).then(function(response){
              console.log("Environment creation success");
            },function(response){
              console.log("Failed adding a new environment");
            });
          }, function(error){
            $scope.errors = [];
            for(var key in error.data.errors){
              $scope.errors.push(error.data.errors[key][0]);
            }
            console.log("An error has happened");
          });
        };
        $scope.$on('devise:new-registration', function (e, user){
          var config = {
            headers: {
              'X-HTTP-Method-Override': 'DELETE'
            }
          };
          Auth.logout(config).then(function(oldUser){
            Materialize.toast("Te has registrado exitosamente"+ oldUser.name +". Recibiras un correo a" + oldUser.email+"con instrucciones para confirmar tu cuenta, en pocos minutos", 6000);
            $state.go("sign_in");
          });
        });
        $scope.canSubmitSign = function(){
          return $scope.sign.$valid;
        };
        $scope.checkMatch = function(){
          if($scope.user.password != $scope.user.passwordConfirmation){
            $('#passwordConfirmation').addClass('invalid');
          }
        };
    }]);