class Log {
    constructor(x, y, height, a) {
      var options = {
          'restitution':0.8,
          'friction':2,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      Matter.Body.setAngle(this.body,a);
      this.width = 20;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
  