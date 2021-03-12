const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var box1, ground1, ground2;







function setup() {

  engine = Engine.create();
  world = engine.world;


  createCanvas(1600,600);
 // createSprite(400, 200, 50, 50);

  ground1 = new Base(800, 590, 1600, 20);
  console.log("start");
  ground2 = new Base(800, 850, 200, 20);console.log("end");
  

  box1 = new Block(800 , 250, "green");
  box2 = new Block(790 , 290, "gray");
  box3 = new Block(810 , 290, "gray");
  box4 = new Block(780 , 330, "pink");
  box5 = new Block(800 , 330, "pink");
  box6 = new Block(820 , 330, "pink");
  box7 = new Block(770 , 370, "yellow");
  box8 = new Block(790 , 370, "yellow");
  box9 = new Block(810 , 370, "yellow");
  box10 = new Block(830 , 370, "yellow");
  box11 = new Block(760 , 410, "blue");
  box12 = new Block(780 , 410, "blue");
  box13 = new Block(800 , 410, "blue");
  box14 = new Block(820 , 410, "blue");
  box15 = new Block(840 , 410, "blue");

  Engine.update(engine);

}

function draw() {
  background(0);
  
  //Engine.run(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  
  
  ground1.display();
  ground2.display();
  
  

  drawSprites();
}