(function(){
  'use strict';
  angular.module('evalEasy')
    .directive('select', materialSelect);
    materialSelect.$inject = ['$timeout'];

    function materialSelect($timeout){
      var directive = {
        link: link,
        restrict: 'E',
        require: '?ngModel'
      };
      function link(scope, element, attrs, ngModel){
        if(ngModel){
          ngModel.$render = create;
        }else{
          $timeout(create);
        }
        function create(){
          element.material_select();
        }

        element.one('$destroy', function(){
          element.material_select('destroy');
        });
      }
      return directive;
    }
})();