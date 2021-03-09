
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj,groundObject	
var world;
var crumpledPaper;


function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	crumpledPaper = new CrumpledPaper(400,650);
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
	background(230);
 
	crumpledPaper.display();
	groundObject.display();
	dustbinObj.display();

	//keyPress();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:285, y:-300});
	}
}


