
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var balll = [],string = [],balls, holder = [];
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	balls = width/160;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	for (var index = 0; index < balls-1; index++) {
		let disball = width/balls;
		holder[index] = new Ball(((disball*index)+disball/2),height/2,true);
		balll[index] = new Ball(((disball*index)+disball/2),height/2,false);
		string[index] = new Joint(holder[index].body,balll[index].body,300,1)
	}
	
	let disball = width/balls;
	holder[index] = new Ball(((disball*index)+disball/2),height/2,true);
	balll[index] = new Ball(((disball*index)+disball/2)+5,height/2-500,false);
	string[index] = new Joint(holder[index].body,balll[index].body,300,1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  for (let index = 0; index < balls; index++) {
	holder[index].display();
	balll[index].display();
	string[index].display();
	}
  //console.log(width/balls)
 
}



