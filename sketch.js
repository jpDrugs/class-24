const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,420,70,70);
    box2 = new Box(920,420,70,70);
    pig1 = new Pig(810,450);
    log1 = new Log(810,360,300,PI/2);

    box3 = new Box(700,340,70,70);
    box4 = new Box(920,340,70,70);
    pig2 = new Pig(810,320);
    log2 = new Log(810,280,300,PI/2);

    box5 = new Box(810,260,70,70);
    log3 = new Log (760,220,150,PI/7);
    log4 = new Log (870,220,150,-PI/7);

    bird = new Bird (200,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();

   box1.display();
   box2.display();
   pig1.display();
   log1.display();

   box3.display();
   box4.display();
   pig2.display();
   log2.display();

   box5.display();
   log3.display();
   log4.display();

   bird.display();
}