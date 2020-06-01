var fixedRect,movingRect
function setup() {
  createCanvas(1200,800);

  fixedRect=createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(400, 200, 80,30);
  movingRect.shapeColor="green";
  movingRect.debug=true;
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
 console.log( movingRect.x - fixedRect.x);
 //console.log( fixedRect.width/2 + movingRect/2);
 if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2
  && movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2)
 //if(movingRect.x < fixedRect.x)
  {
    movingRect.shapeColor= "blue";
    fixedRect.shapeColor= "blue";
  }
  else
   {  
  fixedRect.shapeColor  = "green";
  movingRect.shapeColor= "green";
  }
  drawSprites();
}