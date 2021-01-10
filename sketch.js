const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1250,550);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(625,540,1250,10);
  stand1 = new Stand(690,400,350,10);
  stand2 = new Stand(1100,300,300,10);
 
  //level one
  block1 = new Block(570,375,30,40);
  block2 = new Block(600,375,30,40);
  block3 = new Block(630,375,30,40);
  block4 = new Block(660,375,30,40);
  block5 = new Block(690,375,30,40);
  block6 = new Block(720,375,30,40);
  block7 = new Block(750,375,30,40);
  block8 = new Block(780,375,30,40);
  block9 = new Block(810,375,30,40);
  //level two
  block10 = new Block(600,335,30,40);
  block11 = new Block(630,335,30,40);
  block12 = new Block(660,335,30,40);
  block13 = new Block(690,335,30,40);
  block14 = new Block(720,335,30,40);
  block15 = new Block(750,335,30,40);
  block16 = new Block(780,335,30,40);
  
  //level three
  block17 = new Block(630,275,30,40);
  block18 = new Block(660,275,30,40);
  block19 = new Block(690,275,30,40);
  block20 = new Block(720,275,30,40);
  block21 = new Block(750,275,30,40);
  //level four
  block22 = new Block(660,235,30,40);
  block23 = new Block(690,235,30,40);
  block24 = new Block(720,235,30,40);
  //top
  block25 = new Block(690,175,30,40); 
  //set 2 for second stand
  //level one 
  blocks1 = new Block(1010,275,30,40);
  blocks2 = new Block(1040,275,30,40);
  blocks3 = new Block(1070,275,30,40);
  blocks4 = new Block(1100,275,30,40);
  blocks5 = new Block(1130,275,30,40);
  blocks6 = new Block(1160,275,30,40);
  blocks7 = new Block(1190,275,30,40);
  //level two
  blocks8 = new Block(1040,235,30,40);
  blocks9 = new Block(1070,235,30,40);
  blocks10 = new Block(1100,235,30,40);
  blocks11 = new Block(1130,235,30,40);
  blocks12 = new Block(1160,235,30,40);
  //level three
  blocks13 = new Block(1070,175,30,40);
  blocks14 = new Block(1100,175,30,40);
  blocks15 = new Block(1130,175,30,40);
  //top
  blocks16 = new Block(1100,135,30,40);
  
  var options = {
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
}
  //ball holder with slings
  ball = Bodies.circle(50,200,20,options);
  World.add(world,ball);
  

  slingShot = new SlingShot(this.ball,{x:200,y:300});

}
function draw() {
  background(0);
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  fill("pink");
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  fill("turquoise");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("grey");
  block22.display();
  block23.display();
  block24.display();
  fill("yellow");
  block25.display();

  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  blocks6.display();
  blocks7.display();
  fill("pink");
  blocks8.display();
  blocks9.display();
  blocks10.display();
  blocks11.display();
  blocks12.display();
  fill("turquoise");
  blocks13.display();
  blocks14.display();
  blocks15.display();
  fill("grey");
  blocks16.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}