 /*function DegreeListController($scope, $element, $attrs, DegreeFactory, Auth){
  var user;
  Auth.currentUser().then(function (user){
    user = user;
  });
  DegreeFactory.all(2)
  .success(function(data){
    $scope.degrees = data;
  });
}*//*
function DegreeListController($scope, $element, $attrs, DegreeFactory, Auth){
  //Auth.currentUser().then(function (user){
    debugger
    $scope.degrees = DegreeFactory.get({institution_id: this.institution});
  //});
}
angular.module('evalEasy').component('degreeList', {
  templateUrl: 'views/degrees/_list.html',
    bindings: {
    institution: "="
  },
  controller: DegreeListController

});*/
angular.module('evalEasy')
  .directive('degreeList', function(DegreeFactory, Auth){
    return{
      restrict: 'E',
      templateUrl: 'views/degrees/_list.html',
      scope: {},
      require: '^degreeContainer',
      link: function(scope, element, attrs, ctrl){

        Auth.currentUser().then(function (user){
          scope.degrees = DegreeFactory.query({institution_id: user.institution_id});

          scope.$on('updateDegreesList', function(event, data){
            scope.degrees.push(data);
          });
        });
        scope.editDegree = function(degree){
          scope.$emit('editDegree', degree);
        };
      }
    }
  });




/*scope.$on('dispara', function(event, data){
  Auth.currentUser().then(function (user){
    scope.degrees = DegreeFactory.query({institution_id: user.institution_id});
  });
});*/