class imageclass{

    constructor(path, x, y, h, w)
    {
        this.path = path;
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        
       /* this.imageObjects = [];
        this.loadAnimation();
        this.i =0;
        setInterval(this.incrementIndex, 50); */
    }

    

    getImage()
    {
        var myImage = loadImage(this.path);
        return myImage;
    }
    getX()
    {
        return this.x;
    }
    getY()
    {
        return this.y;
    }

    setX(x)
    {
        this.x = x;
    }
    setY(y)
    {
        this.y = y;
    }

    getH()
    {
        return this.h;
    }
    getW()
    {
        return this.w;
    }

    setH(h)
    {
        this.h = h;
    }
    setW(w)
    {
        this.w = w;
    }


    isRectanglesColliding(rec2){

        var topEdge1 = this.y + this.h;

        var rightEdge1 = this.x + this.w;

        var leftEdge1 = this.x;

        var bottomEdge1 = this.y;

        var topEdge2 = rec2.getY() + rec2.getH();

        var rightEdge2 = rec2.getX() + rec2.getW();

        var leftEdge2 = rec2.getX();

        var bottomEdge2 = rec2.getY();  

        

        if( leftEdge1 < rightEdge2 && rightEdge1 > leftEdge2 && bottomEdge1 < topEdge2 && topEdge1 > bottomEdge2){

            return true;

       }

       return false;

    }
    



   /* loadAnimation()
    {
        for(var i = 0; i < this.path.length; i++)
        {
            this.imageObjects[i] = loadImage(this.path[i]);
        }
    }


    drawAnimation(i)
    {
        image(this.imageObjects[i], this.x, this.y, this.w, this.h);
    } */




}