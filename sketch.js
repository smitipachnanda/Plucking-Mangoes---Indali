const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree,treeImg;
var stone;
var boy,boyImg;
var sling;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload(){
    treeImg = loadImage("images/tree.png")
    boyImg = loadImage("images/boy.png")

     
}

function setup() {
    createCanvas(1000, 700);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    ground = createSprite(500,695,1000,20) 

    
    tree = createSprite(700,380,10,10);
    tree.addImage(treeImg);
    tree.scale = 0.5;

    
    stone = new Stone(235,420,30); 

    sling = new SlingShot(stone.body,{x:150,y:577 });

    boy = createSprite(200,620,30)
    boy.addImage(boyImg)
    boy.scale = 0.10

    
    mango1 = new Mango(650,100,30);
    mango2 = new Mango(170,130,30);
    mango3 = new Mango(1010,140,30);
    mango4 = new Mango(1000,70,30);
    mango5 = new Mango(1100,70,30);
    mango6 = new Mango(1000,230,30);
    mango7 = new Mango(900,230,40);
    mango8 = new Mango(1140,150,40);
    mango9 = new Mango(1100,230,40);
    mango10 = new Mango(1200,200,40);




    





    Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("azure");

  drawSprites();
 
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  ground.display()


  stone.display()
  sling.display()
 // boy.display() 
  

  


  detectcollision(stone,mango1)
  detectcollision(stone,mango2)
  detectcollision(stone,mango3)
  detectcollision(stone,mango4)
  detectcollision(stone,mango5)
  detectcollision(stone,mango6)
  detectcollision(stone,mango7)
  detectcollision(stone,mango8)
  detectcollision(stone,mango9)
  detectcollision(stone,mango10)
  




 
}

function mouseDragged(){
   Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
   sling.fly()
}

function keyPressed(){
    if(keyCode === 32)
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
    sling.attach(stone.body);
}

function detectcollision(stone,mango){

  mangoBodyPosition = mango.body.position
  stoneBodyPosition = stone.body.position
  
  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
    if(distance<= mango.radius + stone.radius)
    {
      Matter.Body.setStatic(mango.body,false);
    }

  }




