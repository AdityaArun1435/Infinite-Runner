var runner;
var runner_img;




function preload(){

  runner_img=loadAnimation("1.png","2.png");
}


function setup(){
createCanvas(400,400);
runner=createSprite(200,200,50,50);
runner.addAnimation("boy",runner_img);
}


function draw(){
background("lightblue");
drawSprites();
}