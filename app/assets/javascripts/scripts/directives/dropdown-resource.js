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
          scope.model = resource.name;
          angular.element(document).find("ul.collection").removeClass('show-list');
          angular.element(document).find("label[for='resource']").addClass('active');
        };
        scope.showCollection = function(){
          if (scope.filteredItems.length == 0){
            angular.element(document).find("ul.collection").removeClass('show-list');
          }else{
            angular.element(document).find("ul.collection").addClass('show-list');
          }

          /*
          element selected= querySelector("li[value="+scope.model+"]")
          if(selected!= null){
            angular.element(document).find(selected).addClass('active');
          }
          */
        };
        scope.checkNewEnvironment = function(){
          if (scope.filteredItems.length == 0){
            scope.model = scope.query;
            angular.element(document).find("ul.collection").removeClass('show-list');
          }
        };
        scope.check = function(){
          if (scope.filteredItems.length == 0){
            angular.element(document).find("ul.collection").removeClass('show-list');
          }else{
            angular.element(document).find("ul.collection").addClass('show-list');
          }
        };
        //scope.hideCollection = function(){
          //angular.element(document).find("ul.collection").removeClass('show-list');
        //};
        $('body').on('click.hideMenu', function(e){
          if($('.item-list').hasClass('show-list')){
            if(!$(e.target).parent().hasClass('item-list') && !($(e.target)[0].outerHTML == $('#resource')[0].outerHTML)){
              if(scope.model == null){
                scope.model = scope.query;
              }
              $('.item-list').removeClass('show-list');
            }
          }
        });
      }
    }
  });