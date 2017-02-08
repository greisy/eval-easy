angular.module("evalEasy")
  .directive("subjectList",['Auth', 'SubjectFactory', function(Auth, SubjectFactory){
    return{
      restrict: "E",
      templateUrl: 'views/subjects/_list.html',
      scope: {},
      link: function(scope, element, attrs){
        Auth.currentUser().then(function (user){
          scope.subjects = SubjectFactory.query({institution_id: user.institution_id});
        });

        scope.$on('subjectListUpdate', function(event, data){
          Auth.currentUser().then(function (user){
            scope.subjects = SubjectFactory.query({institution_id: user.institution_id});
          });
        });
      }
    }
  }]);