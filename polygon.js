class Polygon{
    constructor(x, y, radius) {
        var options = {
                     
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.poly = loadImage("polygon.png");
      }
      display(){
          
          
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.poly,0,0,50,50);
        pop();
      }
}
