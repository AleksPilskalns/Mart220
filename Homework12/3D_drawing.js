
let berry;
let red;
let leaf1;
let leaf2;
let leaf3;
let leaf4;

let pg;

let shapeArray = [];


var boxTranslationX = -100;
var boxTranslationY = -100;


function preload() {
  
  berry = loadModel('assets/Strawberry_obj.obj', true);
  red = loadImage('assets/RED 3.jpg');
  leaf1 = loadImage('assets/OIP.jpg');
  leaf2 = loadImage('assets/R (1).jpg');
  leaf3 = loadImage('assets/R.jpg');
  leaf4 = loadImage('assets/R (2).jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  pg = createGraphics(500,500);
  pg.background(255);
  pg.text("Straberry and leaves by Aleks", 200, 180)
  texture(pg);
  plane(800, 800);

  shapeArray.push(new shapeclass("box", 150, 150, 150, boxTranslationX, boxTranslationY, 0.02, 0.03, 0, leaf3));
  shapeArray.push(new shapeclass("cylinder", 80, 90, 0, 200, 20, 0.01, 0.01, 0, leaf4));
  shapeArray.push(new shapeclass("ellipsoid", 150, 50, 150, 20, 30, 0.05, 0.03, 0, leaf1));
  shapeArray.push(new shapeclass("cone", 80, 30, 0, 80, 10, 0.01, 0.01, 0, leaf2));
}

function draw() {
  background(0);
  scale(2); 
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.03);
  normalMaterial(); 
  texture(red);
  model(berry);

  for (var i = 0; i < shapeArray.length; i++) {
    shapeArray[i].draw(frameCount);
  }

 

  

  
  


  if (mouseIsPressed) {
    boxTranslationX = 0;
    boxTranslationY = 0;
    boxTranslationX = floor(random(600));
    boxTranslationY = floor(random(400));
}


}