angular.module("evalEasy")
  .filter('roundUp', function(){
    return function(bool){
      if (bool){
        return "Si";
      }else{
        return "No";
      }
    }
  })
  .filter('monthYear', function(){
    return function(date_string){
      if(date_string != null){
        var date = new Date(date_string);
        var month = "";
        switch(date.getMonth()+1){
          case 1:
            month = "Ene";
          break;
          case 2:
            month = "Feb";
          break;
          case 3:
            month = "Mar";
          break;
          case 4:
            month = "Abr";
          break;
          case 5:
            month = "May";
          break;
          case 6:
            month = "Jun";
          break;
          case 7:
            month = "Jul";
          break;
          case 8:
            month = "Ago";
          break;
          case 9:
            month = "Sep";
          break;
          case 10:
            month = "Oct";
          break;
          case 11:
            month = "Nov";
          break;
          case 12:
            month = "Dic";
          break;
        }
      }
      return month +"-"+ date.getFullYear();
      debugger
    }
  });