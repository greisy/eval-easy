angular
  .module('evalEasy')
      .controller('AuthCtrl',['$scope', '$state','Auth','InstitutionFactory', 'DocumentTypeFactory', function($scope, $state, Auth, Institution, DocumentTypeFactory){
        var config = {
          headers: {
            'X-HTTP-Method-Override': 'POST'
          }
        };
        $scope.document_types = DocumentTypeFactory.query();
        $scope.institutions = Institution.query();
        $scope.signUp = function(){
          var admin_role = 1;
          $scope.user.role_id = admin_role;
          debugger
          Auth.register($scope.user, config).then(function(registeredUser){
            console.log("User registered"+registeredUser);
            $state.go("sign_in");
            $scope.success = "Recibiras un correo con instrucciones para confirmar su correo, en pocos minutos";
          }, function(error){
            console.log("An error has happened");
          });
        };
        $scope.login = function(){
          Auth.login($scope.user, config).then(function(data){
            console.log(data);
            $state.go("subjects");
          }, function(error){
            $scope.error = error.data.error;
          });
        };
        $scope.canSubmitSign = function(){
          return $scope.sign.$valid;
        };
        $scope.checkMatch = function(){
          if($scope.user.password != $scope.user.passwordConfirmation){
            $('#passwordConfirmation').addClass('invalid');
          }
        }
      }]);
