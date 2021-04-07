//Exercise 4
//By: Christopher Nguyen | 216213332
var count = 100;
var colors = ['red', 'green', 'blue', 'orange', 'yellow', "grey"];

for (var i=0; i<100; i++){
  var para = document.createElement("canvas");
  para.setAttribute('id', i)
  para.style.border= "1px solid #000000";
  para.style.height = 50+"px";
  para.style.width = 50+"px";
  para.style.position= "absolute"
  var random= Math.floor((Math.random()*400)+0);
  para.style.left = random;
  random= Math.floor((Math.random()*400)+0);
  para.style.top = random;
  random= Math.floor((Math.random()*6)+0);
  para.style.backgroundColor = colors[random];
  para.addEventListener('mouseover', function(){
    count = count - 1;
    if(count==0){
      alert("Last one!");
    }
    this.remove();
  } );
  var element = document.getElementById("shapeLocations");
  element.appendChild(para);
}

function addCanvas(){
  for (var i=0; i<100; i++){
    var para = document.createElement("canvas");
    para.setAttribute('id', i)
    para.style.border= "1px solid #000000";
    para.style.height = 50+"px";
    para.style.width = 50+"px";
    para.style.position= "absolute"
    var random= Math.floor((Math.random()*400)+0);
    para.style.left = random;
    random= Math.floor((Math.random()*400)+0);
    para.style.top = random;
    random= Math.floor((Math.random()*6)+0);
    para.style.backgroundColor = colors[random];
    para.addEventListener('mouseover', function(){
      count = count - 1;
      if(count==0){
        alert("Last one!");
      }
      this.remove();
    } );
    var element = document.getElementById("shapeLocations");
    element.appendChild(para);
  }
  count +=100;
}
