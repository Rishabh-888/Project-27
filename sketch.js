const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var bobDiameter = 100;

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(568, 150, 490, 40);

	bobObject1 = new Bob(400, 500, 25);
	bobObject2 = new Bob(500, 500, 25);
	bobObject3 = new Bob(600, 500, 25);
	bobObject4 = new Bob(700, 500, 25);
	bobObject5 = new Bob(800, 500, 25);

	rope1 = new Rope(bobObject1.body, roof.body, -bobDiameter*2, 0);
  rope2 = new Rope(bobObject2.body, roof.body, -bobDiameter*1, 0);
  rope3 = new Rope(bobObject3.body, roof.body, bobDiameter*0, 0);
  rope4 = new Rope(bobObject4.body, roof.body, bobDiameter*1, 0);
  rope5 = new Rope(bobObject5.body, roof.body, bobDiameter*2, 0);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);

  fill("black");
  textFont("Arial Black");
  textSize(30);
  text("Press UP arrow to start the game", 70, 80);

  roof.display();

  bobObject2.display();
  bobObject1.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-400, y:-500});
  }
}