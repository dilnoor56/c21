var fixedRectangle,movingRectangle;
var box1,box2

function setup() {
  createCanvas(1200,800);
  fixedRectangle = createSprite(600, 200, 50, 80);
  fixedRectangle.shapeColor = "green";
  fixedRectangle.debug = true;
  fixedRectangle.velocityX=5
  movingRectangle = createSprite(200,200,80,30);
  movingRectangle.shapeColor = "red";
  movingRectangle.debug = true;
  movingRectangle.velocityX=-5
  box1=createSprite(400,100,50,50)
  box1.shapeColor="yellow"
}

function draw() {
  background(0,0,0);  
  /*movingRectangle.x = World.mouseX;
  movingRectangle.y = World.mouseY;
  if(isTouching(movingRectangle,box1)){
    movingRectangle.shapeColor = "red";
    box1.shapeColor = "red";
  }
  else{
    movingRectangle.shapeColor = "green";
    box1.shapeColor = "yellow";
  }*/
  bounceOff(movingRectangle,fixedRectangle)
  drawSprites();
}
