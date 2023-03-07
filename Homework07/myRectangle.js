class Rectangle
{
  
  constructor(x,y,w,h)
  {
    //this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

 /* getImg()
  {
    return this.img
  }*/
  
  getX()
  {
    return this.x;
  }
  getY()
  {
    return this.y;
  }
  getW()
  {
    return this.w;
  }
  getH()
  {
    return this.h;
  }
  
  draw()
  {
    rect(this.x, this.y, this.w, this.h);
  }
}
