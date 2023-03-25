


var girlObjects = [];
var girlWalkObjects = [];
var girlWalkLeftObjects = [];
var currentObjects;
var foodObject = [];


var animations = [];
var walkAnimation =[];
var leftwalkAnimation = [];
var currentAnimation;
var currentFood;
var badFood
var badCurrentFood

var result;
var walkresult;
var walkresultleft;
var foodresult;

var points = 0;

var img;

var counter = 0;

var myInterval;

var mycurrentfood;

var index = 0;

var xRandom;
var yRandom;
var xRandom1;
var yRandom1;
var myFood;
var isColliding = false;
var wall;


var myBackgroundSound;
var nomSound;
var ewSound;

const particles = [];
var health = 100;


function preload() {

  result = loadStrings('ass/idle.txt');
  walkresult = loadStrings('ass/walk.txt')
  walkresultleft = loadStrings('ass/walkleft.txt')
  
  soundFormats('mp3');
  myBackgroundSound = loadSound('ass/ytmp3free.cc_there-will-be-rain-youtubemp3free.org.mp3');
  nomSound = loadSound('ass/ytmp3free.cc_nom-nom-nom-sound-effect-youtubemp3free.org.mp3')
  ewSound = loadSound('ass/ytmp3free.cc_ew-sound-effect-youtubemp3free.org.mp3')

  wall = loadImage('ass/brick.png');
}




function setup() {
    createCanvas(2000, 1000);

    backgroundMusic()

    xRandom = getRandomNumber(150, 1700);
    yRandom = getRandomNumber(150, 900);

    xRandom1 = getRandomNumber(150, 1700);
    yRandom1 = getRandomNumber(150, 900);



   


    currentFood = new imageclass('ass/icecream(1).png', xRandom, yRandom, 180, 180);
    myFood = currentFood.getImage();

    badCurrentFood = new imageclass('ass/ice-cream.png', xRandom1, yRandom1, 180, 180);
    badFood = badCurrentFood.getImage();

    for (var i = 0; i < result.length; i++)         //where the image appears on screen
    {
        girlObjects.push(new imageclass('ass/' + result[i], 100, 100, 200, 200));
    animations[i] = girlObjects[i].getImage();
}


for (var i = 0; i < walkresult.length; i++)
{
    girlWalkObjects.push(new imageclass('ass/' + walkresult[i], 100, 100, 200, 200));
    walkAnimation[i] = girlWalkObjects[i].getImage();
    girlWalkLeftObjects.push(new imageclass('ass/' + walkresultleft[i], 100, 100, 200, 200));
    leftwalkAnimation[i] =  girlWalkLeftObjects[i].getImage();
}



currentObjects = girlObjects;



    



//changes speed of idle motion
setInterval(incrementIndex, 300);   

}


function backgroundMusic()
{
    myBackgroundSound.play();
    myBackgroundSound.loop();
    myBackgroundSound.setVolume(0.3);
    userStartAudio();
}



function icecreamImage()
{
    image(myFood, xRandom, yRandom);

    
    
    
}


function draw() 
{
    background(20);


    //image(myFood, xRandom, yRandom);

    
    icecreamImage()
   
    image(badFood, xRandom1, yRandom1);

   image(wall, 900, 0, 222, 1000);
    

    if(keyIsPressed)
    {
        

        clearInterval(myInterval);

        myInterval = null;
        index++;

        //changes speed of animation
        if (index > 3)
        {
            incrementIndex();
            index = 0;
        }


        if (key == "d")
        {

           
            currentAnimation = walkAnimation;
            currentObjects = girlWalkObjects;

           
                                                                        //changes speed of character
            currentObjects[counter].setX(currentObjects[counter].getX() + 10);


            if (counter >= currentAnimation.length)
            {
                counter = 0;
            }


            for (var i = 0; i < girlWalkLeftObjects.length; i++)
            {
                girlWalkLeftObjects[i].setX(currentObjects[0].getX());
            }


            girlWalkObjects = currentObjects;

            

        }
        else if (key == "a")
        {


       
        
        currentAnimation = leftwalkAnimation;
        currentObjects = girlWalkLeftObjects;

        if (counter >= currentAnimation.length)
        {
            counter = 0;
        }
        
        currentObjects[counter].setX(currentObjects[counter].getX() - 10);

        for (var i = 0; i < girlWalkObjects.length; i++)
        {
            girlWalkObjects[i].setX(currentObjects[0].getX());
        }


        girlWalkLeftObjects = currentObjects;

        

    }


    else if (key == "s")
        {


            

        currentAnimation = leftwalkAnimation;
        currentObjects = girlWalkLeftObjects;

        if (counter >= currentAnimation.length)
        {
            counter = 0;
        }
        
        currentObjects[counter].setY(currentObjects[counter].getY() + 10);

        for (var i = 0; i < girlWalkObjects.length; i++)
        {
            girlWalkObjects[i].setY(currentObjects[0].getY());
        }


        girlWalkLeftObjects = currentObjects;

       
    }

    else if (key == "w")
        {


            

        currentAnimation = walkAnimation;
        currentObjects = girlWalkObjects;

        if (counter >= currentAnimation.length)
        {
            counter = 0;
        }
        
        currentObjects[counter].setY(currentObjects[counter].getY() - 10);

        for (var i = 0; i < girlWalkObjects.length; i++)
        {
            girlWalkObjects[i].setY(currentObjects[0].getY());
        }


        girlWalkLeftObjects = currentObjects;

       

    }


    for (var i = 0; i < girlObjects.length; i++)
    girlObjects[i].setX(currentObjects[0].getX());

    for (var i = 0; i < girlObjects.length; i++)
    girlObjects[i].setY(currentObjects[0].getY());


   
}


else
{
    if (myInterval == null)
    {                                   //changes idle animation speed
        myInterval = setInterval(incrementIndex, 150);
    }

    
    
    
    currentObjects = girlObjects;
    currentAnimation = animations;
   
   
    

}

image(currentAnimation[counter], currentObjects[counter].getX(), currentObjects[counter].getY());


badcollision();



collision();

/*if(nomSound.isPlaying(true))
{
    nomSound.setLoop(false);
}*/


}

       







  function incrementIndex()
{
     
     counter += 10;

     
     if (counter >= currentObjects.length) 
     { //keep at 0
         counter = 0;
     }
}



function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }


function collision() {

    isColliding = currentObjects[counter].isRectanglesColliding(currentFood);
        
    if(isColliding)
    {
        fill(200)
        text("Yummy Ice Cream!", 800,200,200,200)
    
        
        
        points =+ 1;
        text(points, 850, 300, 200,200)
        

        if (!nomSound.isPlaying()) {

            nomSound.play();

            nomSound.setLoop(false);

            nomSound.setVolume(0.2);

 

        }
        
    }

}

/*function checkCollision()
{
    currentObjects[counter].overlap(currentFood, icecreamSound);
}*/

function badcollision() {

    isColliding = currentObjects[counter].isRectanglesColliding(badCurrentFood);
        
    if(isColliding)
    {
        fill(200)
        text("Bad Ice Cream!", 800,200,200,200)
    
        
        
        points =- 1;
        text(points, 850, 300, 200,200)
        

        if (!ewSound.isPlaying()) {

            ewSound.play();

            ewSound.setLoop(false);

            ewSound.setVolume(0.2);

 

        }
        
    }

}

function icecreamSound()
{
    
    nomSound.play();
    nomSound.setLoop(false);
    nomSound.setVolume(0.3);
    
    
}


function createParticles(x,y)
{
for (let i = 0; i < 5; i++) {
    let p = new Particle(x,y);
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
}
