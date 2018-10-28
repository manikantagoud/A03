var App = {
    launch: function () {
      
      App.getDays();
    $("#demo").prop('disabled',true);
    $("#demo1").prop('disabled',true);
    $("#duration").prop('disabled',true);
    
    document.getElementById("get").disabled = true;
    },
    
  getDays: function(){
    var input = document.getElementById("demo").value; 
    
    var input1 = document.getElementById("demo1").value;
    
    let answer = App.calculateDays(input, input1);
    document.getElementById("duration").value = answer;
  },
  calculateDays: function (input,input1) {
    var oneDay = 24*60*60*1000;
  
      var firstDate = new Date(input);
      var secondDate = new Date(input1);
      if(firstDate<secondDate){    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));}
      else{
        alert("Start Date should be less than End Date");
      }
  
      return diffDays;
  }
  
  }