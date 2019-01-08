var sketch1 = function(p){
  p.x = 300;
  p.y = 300;
  p.setup = function(){
    p.createCanvas(600,600);
    p.background(255);
  }
  p.draw = function(){
    p.fill(220,100,150,15);
    p.noStroke();
    p.ellipse(p.x,p.y,24,24);
  
    p.x = p.x + p.random(-15,15);
    p.y = p.y + p.random(-15,15);
  }
}
var sketch2 = function(p){
  p.x = 300;
  p.y = 300;
  p.setup = function(){
    p.createCanvas(600,600);
    p.background(255);
  }
  p.draw = function(){
    p.fill(120,220,140,15);
    p.noStroke();
    p.ellipse(p.x,p.y,24,24);
  
    p.x = p.x + p.random(-15,15);
    p.y = p.y + p.random(-15,15);
  }
}
var myp51 = new p5(sketch1);
var myp52 = new p5(sketch2);

function resetBackground(){
  myp51.x = myp51.width/2;
  myp51.y = myp51.height/2;
  myp51.background(255);
}
setInterval(resetBackground,5000);