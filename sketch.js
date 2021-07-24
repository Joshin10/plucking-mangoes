
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stone,groundObject, launcherObject;
var mango1;
var world,boy;
var chain;

function preload(){
	boy=loadImage("images/boy.png");

  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,100,30);
	mango2=new Mango(1150,150,30);
	mango3=new Mango(1000,250,30);
  mango4=new Mango(1200,250,30);
  mango5=new Mango(950,250,30);
  mango6=new Mango(970,100,30);
 stone=new Stone(150,450,30,30)	
 chain=new Chain(stone.body,{x:300,y:350})
	treeObj=new Tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);
	Engine.run(engine);

}

function draw() {

  background(230);

 
  //Add code for displaying text here!
  image(boy ,300,340,200,300);
 stone.display();
  treeObj.display();
  mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
  groundObject.display();
  chain.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2)
  detectcollision(stone,mango3)
  detectcollision(stone,mango4)
  detectcollision(stone,mango5)
  detectcollision(stone,mango6)

  /* if(stone.collide(mango1)){
    mango1.velocity.y=3
      }
if(stone.collide(mango2)){
 mango2.velocity.y=3
   }
if(stone.collide(mango3)){
 mango3.velocity.y=3
}
if(stone.collide(mango4)){
  mango4.velocity.y=3
   }
 if(stone.collide(mango5)){
     mango5.velocity.y=3
     }
  if(stone.collide(mango6)){
  mango6.velocity.y=3
  }
  */
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
    
}
function mouseReleased(){
chain.fly()
}

function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}