const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var slingshot
var engine, world
var score = 0;

function setup() {
  createCanvas(800,400);  
  engine = Engine.create();
  world = engine.world;


  block2 = new Box (50, 200, 50, 40);
  block3 = new Box (100, 200, 50, 40);
  block4 = new Box (150, 200, 50, 40);
  block5 = new Box (200, 200, 50, 40);
  block6 = new Box (250, 200, 50, 40);
 
  block8 = new Box (50, 160, 50, 40);
  block9 = new Box (100, 160, 50, 40);
  block10 = new Box (150, 160, 50, 40);
  block11 = new Box (200, 160, 50, 40);
  block12 = new Box (250, 160, 50, 40);
  block13 = new Box (100, 120, 50, 40);
  block14 = new Box (150, 120, 50, 40);
  block15 = new Box (200, 120, 50, 40);
  block16 = new Box (150, 80, 50, 40);

  ground = new Ground(600,height,1200,20);
  platform = new Ground(150, 305, 300, 170);

  polygon = new Rock (600, 200, 30, 40);
 

  slingshot = new Slingshot(polygon.body,{x:600, y:200});
  console.log(polygon);

}

function draw() {
  background(247,223,178);  
  Engine.update(engine);
  debug: true;
  text("Score  " + score, width-300, 50)

  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();
  slingshot.display();
  polygon.display();
  ground.display();
  platform.display();

  
  
}
//hammer, anvil and stirrup -- mallus, incus, stapes
function mouseDragged(){

      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(polygon.body, {x:200, y:50})
     slingshot.attach(polygon.body);
  }
}

