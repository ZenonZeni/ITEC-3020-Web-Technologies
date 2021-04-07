//Exercise 2
//By:Christopher Nguyen | 216213332

var count = 0; //Keep Track of how many numbers entered in array
var numbers = new Array(); //Array changes size automatically

function testing(){
  var num = document.getElementById('theinput').value;
  var sentence = "";
  var p = 0;
  var n = 0;
  if (num == 0){
      for (var i =0; i < numbers.length; i++){
        var x = numbers[i];
        if(x>0){
          p++;
        }
        else if(x < 0){
          n++;
        }
        else{
        }
      }
      document.getElementById('positive').innerHTML = "Positive Numbers: " + p;
      document.getElementById('negative').innerHTML = "Negative Numbers: " + n;
  }
  else{
    numbers[count] = num;
    count++;
  }
}

function reset(){
  numbers = new Array();
  count = 0;
  document.getElementById('positive').innerHTML = "Positive Numbers: " + 0;
  document.getElementById('negative').innerHTML = "Negative Numbers: " + 0;
}
