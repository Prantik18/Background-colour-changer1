var b_Red;
var b_Green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);
  b_Red = createButton("RED");
  b_Red.position(100,50);
  b_Red.mousePressed(red_bg);
  
  b_Green = createButton("GREEN");
  b_Green.position(250,50);
  b_Green.mousePressed(green_bg);
}

function draw() {
  background(r,g,b);
}
function red_bg(){
  r = 255;
  g = 0;
  b = 0;
}
function green_bg(){
  r = 0;
  g = 255;
  b = 0;
}
