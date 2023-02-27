class imageclass{

    constructor(path, x, y, h, w)
    {
        this.path = path;
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
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

}
