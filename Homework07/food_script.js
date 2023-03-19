


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


var result;
var walkresult;
var walkresultleft;
var foodresult;

var points = 0;

var img;

var counter = 0;

var myInterval;

var index = 0;

var xRandom;
var yRandom;
var myFood;
var isColliding = false;


var myBackgroundSound;


function preload() {

  result = loadStrings('ass/idle.txt');
  walkresult = loadStrings('ass/walk.txt')
  walkresultleft = loadStrings('ass/walkleft.txt')
  
  soundFormats('mp3');
  myBackgroundSound = loadSound('ass/ytmp3free.cc_there-will-be-rain-youtubemp3free.org.mp3');
 
}




function setup() {
    createCanvas(2000, 1000);

   

    xRandom = getRandomNumber(150, 1900);
    yRandom = getRandomNumber(150, 900);


    currentFood = new imageclass('ass/icecream(1).png', xRandom, yRandom, 180, 180);
    myFood = currentFood.getImage();


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


function mousePressed()
    {
    myBackgroundSound.play();
    myBackgroundSound.loop();
    myBackgroundSound.setVolume(0.3);
    
    }


function draw() 
{
    background(20);


   image(myFood, xRandom, yRandom)

    
   
   
    

   
    

    if(keyIsPressed)
    {
        collision()

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

            collision()

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

        collision()

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

        collision()

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

        collision()

    }


    for (var i = 0; i < girlObjects.length; i++)
    girlObjects[i].setX(currentObjects[0].getX());

    for (var i = 0; i < girlObjects.length; i++)
    girlObjects[i].setY(currentObjects[0].getY());


    collision()

}


else
{
    if (myInterval == null)
    {                                   //changes idle animation speed
        myInterval = setInterval(incrementIndex, 150);
    }

    
    
    
    currentObjects = girlObjects;
    currentAnimation = animations;
   
    isColliding = currentObjects[counter].isRectanglesColliding(currentFood);
        
    collision()

}

image(currentAnimation[counter], currentObjects[counter].getX(), currentObjects[counter].getY());




collision()





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
    }

}



