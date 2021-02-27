class Ball{
    constructor(x, y,sta) {
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0,
            'isStatic': sta
        }
        var awidth = 130;
        var aheight = 130;
        this.body = Bodies.rectangle(x, y, awidth,aheight, options);
        this.width = awidth;
        this.height = aheight;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER)
        ellipse(0, 0, this.width, this.height);
        pop();
      }
  };