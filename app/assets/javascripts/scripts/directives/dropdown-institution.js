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
				element[0].querySelector("ul.collection").style.display ="none";
				//console.log(element[0].querySelector("ul.collection").id);
				//element.css("display", "none");
				scope.setInstitution = function(institution){

					scope.query =  institution.name;
					scope.model = institution.id;
					element[0].querySelector("ul.collection").style.display ="none";
					debugger
				};
				scope.showCollection = function(){
					element[0].querySelector("ul.collection").style.display ="block";
				};
				scope.hideCollection = function(){
					element[0].querySelector("ul.collection").style.display ="none";
				};
			}
		}
	});