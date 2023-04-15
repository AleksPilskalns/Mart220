var img
var img1
var img2

var pg;



function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    img = loadImage("assets/AdobeStock_208955943-1.jpeg")
    img1 = loadImage("assets/R.jpg")
    img2 = loadImage("assets/R (1).jpg")
    pg = createGraphics(256,256);
  }
  
  function draw() {
      background(0);
      pg.background(255);
      pg.text('Abstract IceCream! By Aleks', 100, 180);
      texture(pg);
      plane(200, 200);

      normalMaterial();
      translate(-100,-100);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      texture(img);
      sphere(150);


    

    
   
    
    normalMaterial();
    translate(500,-400);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    texture(img1)
    cone(150, 250, 24, 24, true);



    normalMaterial();
    translate(400,200);
    rotateX(frameCount * 0.05);
    rotateY(frameCount * 0.01);
    texture(img2)
    box(50, 50, 50);


    normalMaterial();
    translate(400,700);
    rotateX(frameCount * 0.05);
    rotateY(frameCount * 0.010);
    texture(img2)
    box(50, 50, 50);

    normalMaterial();
    translate(-600,300);
    rotateX(frameCount * 0.010);
    rotateY(frameCount * 0.05);
    texture(img2)
    box(50, 50, 50);
  }