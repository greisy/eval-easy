angular.module("evalEasy")
	.directive('dropdownInstitution', function(){
		return{
			restrict: 'E',
			templateUrl: 'views/directives/dropdown-institution.html',
			scope: {
				institutions: "=",
				search: "="
			},
			link: function(scope, elem, attrs){
			}	
		}
	});