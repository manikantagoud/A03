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
    console.log(input+"inout");
    var oneDay = 24*60*60*1000;
  
    var date2 = new Date(input);
var date1 = new Date(input1);
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var days = Math.ceil(timeDiff / (1000 * 3600 * 24));
console.log("days"+days);
if(document.getElementById('daycheck')){
document.getElementById('daycheck').innerHTML = days;
}
      return days;
  }
  
  }