
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground
var bob1, bob2, bob3, bob4, bob5
var rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

ground=new Roof(600,100,1000,40)
bob1=new Bob(260,235,50);
bob2=new Bob(400,200,50);
bob3=new Bob(600,200,50);
bob4=new Bob(800,200,50);
bob5=new Bob(1000,200,50);


ropeLength = 400;
    ropeStiffness = 0;

    rope1 = new Rope(bob1.body, {x: 270, y: 80}, ropeLength, ropeStiffness);

    rope2 = new Rope(bob2.body, {x: 350, y: 80}, ropeLength, ropeStiffness);

    rope3 = new Rope(bob3.body, {x: 430, y: 80}, ropeLength, ropeStiffness);

    rope4 = new Rope(bob4.body, {x: 510, y: 80}, ropeLength, ropeStiffness);

    rope5 = new Rope(bob5.body, {x: 590, y: 80}, ropeLength, ropeStiffness);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background(0);
ground.display()
bob1.display()
bob2.display()
bob3.display()
bob4.display()
bob5.display()
rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:1000,y:-1000})
	}
  }



