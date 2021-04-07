function getNumber(){
  var input = document.getElementById("number").value;
  document.getElementById("input").innerHTML = input;
  sameReverse(input);
}

function sameReverse(input){
  reverse = 0;
  temp = input;
  while (temp > 0){
    reverse = (reverse*10) + (temp%10);
    temp = Math.floor(temp/10);
  }
  document.getElementById("result").innerHTML = reverse;
  if(reverse == input){
    document.getElementById("ans").innerHTML = "Yes";
  }
  else{
    document.getElementById("ans").innerHTML = "No";
  }
}
