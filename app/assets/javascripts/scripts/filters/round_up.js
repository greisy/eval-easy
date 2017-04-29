angular.module("evalEasy")
  .filter('roundUp', function(){
    return function(bool){
      if (bool){
        return "Si";
      }else{
        return "No";
      }
    }
  });