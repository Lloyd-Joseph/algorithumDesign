var fixedRect;
var movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);

  movingRect = createSprite(500, 100, 50, 50); 
}

function draw() {
  background(255,255,255);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  console.log(movingRect.x - fixedRect.x);

  if(  Math.abs(movingRect.x - fixedRect.x) <=   fixedRect.width/2 + movingRect.width/2 &&   Math.abs(movingRect.y - fixedRect.y)  <=  fixedRect.height/2 + movingRect.height/2) {

    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";


  } else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";   
  }



  drawSprites();
}