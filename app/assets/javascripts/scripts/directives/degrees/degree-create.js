angular.module('evalEasy')
  .directive('degreeCreate', function(DegreeFactory, Auth){
    return{
      restrict: 'E',
      templateUrl: 'views/degrees/_create.html',
      scope: {},
      require: "^degreeContainer",
      link: function(scope, element, attrs, ctrl){
        scope.degree = {};
        scope.addNewDegree = function(){
          Auth.currentUser().then(function (user){
            scope.degree.institution_id = user.institution_id;
            var degreeNew = new DegreeFactory(scope.degree);
            degreeNew.$save({institution_id: user.institution_id})
              .then(function(data){
                Materialize.toast('Se agregó la carrera correctamente!', 4000);
                scope.$emit('degreeCreated', data);
              }).catch(function(degree){
                $scope.errors = [degree.data.error];
              });
          });
        };
        scope.$on('fillForm', function(event, data){
          debugger
          scope.degree = angular.copy(data);
        });
      }
    }
  });



/*DegreeFactory.save({institution_id: user.institution_id}, scope.degree, function(data, data2){
debugger
});*/