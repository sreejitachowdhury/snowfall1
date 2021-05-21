const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroungImg, background;
var snow1, snow2, snow3, snow4, snow5, snow6, snowImg;

function preload()
{
    backgroungImg = "snow3.jpg";
    snowImg = "snow4.webp"
}

function setup()
{
    var canvas = createCanvas(300,800);
    engine = Engine.create();
    world = engine.world;

    snow1 = new Snow(30, 100, 20, 20);
    snow2 = new Snow(50, 100, 20, 20);
    snow3 = new Snow(90, 100, 20, 20);
    snow4 = new Snow(20, 100, 20, 20);
    snow5 = new Snow(30, 100, 20, 20);
    snow6 = new Snow(50, 100, 20, 20);
}   

function draw()
{
    background(backgroundImg);
    Engine.update(engine);

    snow1.display();
    snow2.display();
    snow3.display();
    snow4.display();
    snow5.display();
    snow6.display();
}
