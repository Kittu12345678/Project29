class Block {
    constructor(x, y, c) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, 40, options);
      this.width = 20;
      this.height = 40;
       this.c =c;
      
    
      
      World.add(world, this.body);
    }

   



    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(2);
      fill(this.c);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  