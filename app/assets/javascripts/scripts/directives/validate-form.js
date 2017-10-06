angular.module('evalEasy')
  .directive('validateMessage', function(){
    return{
    	restrict: 'E',
    	templateUrl: "views/directives/validate-message.html",
    	scope: {
    		elementValidate: "@",
    		kindElement: "@",
    		titleElement: "@",
    		nameElement: "@",
    		idElement: "@",
    		model: "=",
    		content: "@",
    	},
    	link: function(scope, element, attrs){

    	}
    };
});