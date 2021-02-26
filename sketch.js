const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ball;

function setup() {
  createCanvas(800,400);
  

  myEngine = Engine.create();
  
  myWorld = myEngine.world;

  var options= {
    isStatic : true
  }
  
  ground= Bodies.rectangle(200,380,400,20,options)
  
  World.add(myWorld, ground)
  box1 = new Box(200,200,50,70)
  box2 = new Box(240,100,60,50)


  var ballOptions= {
    restitution : 1, isStatic: true
  }
  //ball = Bodies.circle(200,80,50, ballOptions);
 // World.add(myWorld, ball)
  
  
  
}

function draw() {
  background(0);  
  
  Engine.update(myEngine);

box1.display();
box2.display();

  rectMode(CENTER)
fill("brown")
  rect(ground.position.x, ground.position.y, 400,20)

  
  

}