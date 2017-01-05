angular.module("evalEasy")
  .directive('subjectCreate', ['SubjectFactory','Auth', function(subject, auth){
    return{
      restrict: 'E',
      templateUrl: 'views/subjects/_create.html',
      scope: {},
      link: function(scope, element, attrs, ctrl){
        scope.new_subject = {};
        scope.addNewSubject = function(){
          auth.currentUser().then(function(user){
            scope.new_subject.institution_id = user.institution_id;
          })
        }
      }
    }
  }]);