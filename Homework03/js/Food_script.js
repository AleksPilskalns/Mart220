var chipX =230;
var chipX1 =70;
var chipY =200;
var chipY1=150;
var chipZ = 300;
var chipZ1 =100;


var chipDir = Math.floor(Math.random() * 10) + 1;


var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var iceX = 250;
var iceY = 150;

var img;
var imgX = 0;
var imgY = 0;

var img1;
var img1X = 300;
var img1Y = 300;

var img2;
var img2X = 400;
var img2Y = 0;


var myFont;

var timerValue = 10;

function preload() {

 
  img = loadImage('https://th.bing.com/th/id/OIP.fxhwNOWZedIVTdHGprY1zQAAAA?w=124&h=187&c=7&r=0&o=5&pid=1.7');
  
  img1 = loadImage('https://th.bing.com/th/id/OIP.etfThVrpY-6K-tAjsbu_4AAAAA?pid=ImgDet&rs=1')
  
  img2 = loadImage('https://th.bing.com/th/id/OIP.TRmX3oBmYm1JCqMHroQhjwAAAA?w=115&h=182&c=7&r=0&o=5&pid=1.7')
}



function setup() {
  createCanvas(500, 500);


 
  setInterval(timeIt, 1000);
  
}

function draw() {
  background(20);
  
  fill(200, 300, 300);
  circle(iceX,iceY,200);
  fill(200, 157, 124);
  triangle(160, 200, 250, 400, 340, 200);

  line(160, 200, 319, 250);
  line(179, 240, 310, 270);
  line(191, 270, 295, 300);
  line(205, 300, 285, 320);
  line(219, 330, 277, 340);
  line(232, 360, 267, 365);

  line(181, 250, 340, 200);
  line(195, 280, 325, 230);
  line(209, 310, 305, 280);
  line(222, 340, 290, 310);
  line(237, 370, 273, 350);

  fill(70, 32, 32);
  square(chipX,chipX1,20);
  square(chipY,chipY1,20);
  square(chipZ,chipZ1,20);

  chipX+=chipDir;
  chipX1+=chipDir;
  if(chipX > width)
  {chipX = chipDir}

  if(chipX1 > height)
  {chipX1 = chipDir}

  chipY+=chipDir;
  chipY1+=chipDir;
  if(chipY > width)
  {chipY = chipDir}

  if(chipY1 > height)
  {chipY1 = chipDir}

  chipZ+=chipDir;
  chipZ1+=chipDir;
  if(chipZ > width)
  {chipZ = chipDir}

  if(chipZ1 > height)
  {chipZ1 = chipDir}


  movement();


  image(img, imgX, imgY);

  image(img1, img1X, img1Y)

  image(img2, img2X, img2Y)

 
 
  textSize(20);
  fill(200, 300, 300);
  text('~Aleks~',400, 480);
  text('Minty Choccy Ice Cream',20, 20);


  if (timerValue >= 10) {
    text("0:" + timerValue, width / 2, height / 2);
  }
  if (timerValue < 10) {
    text('0:0' + timerValue, width / 2, height / 2);
  }
  if (timerValue == 0) {
    text('Ice Cream Time', width / 2, height / 2 + 15);
  }


if (timerValue == 0) {
  imgX+=chipDir;
  imgY+=chipDir;
  if(imgX > width)
  {imgX = chipDir}

  if(imgY > height)
  {imgY = chipDir}

  img1X+=chipDir;
  img1Y+=chipDir;
  if(img1X > width)
  {img1X = chipDir}

  if(img1Y > height)
  {img1Y = chipDir}

  img2X+=chipDir;
  img2Y+=chipDir;
  if(img2X > width)
  {img2X = chipDir}

  if(img2Y > height)
  {img2Y = chipDir}
}

  
}

function getRandomNumber(number) {
  return Math.floor(Math.random() * number) + 10;
}

function movement()
{ if(keyIsDown(w))
    {
        iceY -= 10;   
    }
    if(keyIsDown(s))
    {
        iceY += 10;   
    }
    if(keyIsDown(a))
    {
        iceX -= 10;   
    }
    if(keyIsDown(d))
    {
        iceX += 10;   
    } }


    function timeIt() {
      if (timerValue > 0) {
        timerValue--;
      }
    }