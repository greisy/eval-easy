angular.module('evalEasy')
  .directive('dropdownResource', function(){
    return{
      restrict: "E",
      templateUrl: "views/directives/dropdown-resource.html",
      scope: {
        showInformation: '@',
        showError: '@',
        model: "=",
        resources: "="
      },
      link: function(scope, element, attrs){
        //console.log(element[0].querySelector("ul.collection").id);
        //element.css("display", "none");
        scope.setResource = function(resource){

          scope.query =  resource.name;
          scope.model = resource.id;
          angular.element(document).find("ul.collection").removeClass('show-list');
          angular.element(document).find("label[for='resource']").addClass('active');
        };
        scope.showCollection = function(){
          angular.element(document).find("ul.collection").addClass('show-list');
        };
        //scope.hideCollection = function(){
          //angular.element(document).find("ul.collection").removeClass('show-list');
        //};
        $('body').on('click.hideMenu', function(e){
          if($('.item-list').hasClass('show-list')){
            if(!$(e.target).parent().hasClass('item-list') && !($(e.target)[0].outerHTML == $('#resource')[0].outerHTML)){
              $('.item-list').removeClass('show-list');
            }
          }
        });
      }
    }
  });