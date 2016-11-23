angular.module('evalEasy')
	.directive('dropdownInstitution', function(){
		return{
			restrict: "E",
			templateUrl: "views/directives/dropdown-institution.html",
			scope: {
				institutions: "=",
				model: "="
			},
			link: function(scope, element, attrs){
				angular.element(document).find("ul.collection").css("display", "none");
				//console.log(element[0].querySelector("ul.collection").id);
				//element.css("display", "none");
				scope.setInstitution = function(institution){

					scope.query =  institution.name;
					scope.model = institution.id;
					angular.element(document).find("ul.collection").css("display", "none");
				};
				scope.showCollection = function(){
					angular.element(document).find("ul.collection").css("display", "block");
				};
				scope.hideCollection = function(){
					angular.element(document).find("ul.collection").css("display", "none");
				};
			}
		}
	});