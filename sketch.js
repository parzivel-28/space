var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;

function preload(){
  bg= loadImage("spacebg.jpg");
  issimg = loadImage("iss.png");
  scimg1 = loadImage("spacecraft1.png");
  scimg2 = loadImage("spacecraft2.png");
  scimg3= loadImage("spacecraft3.png");
  scimg4= loadImage("spacecraft4.png");
}
function setup() {
  createCanvas(800,400);
 iss= createSprite(330, 130, 50, 50);
  iss.addImage(issimg);
  iss.scale=0.75
  spacecraft=createSprite(285,280,10,10);
  spacecraft.addImage(scimg1);
  spacecraft.scale=0.25

}

function draw() {
  background(bg);  
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(1,-1);
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(scimg4);
      spacecraft.x=spacecraft.x-1;

    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(scimg3);
      spacecraft.x=spacecraft.x+1;

    }
    if(keyDown("UP_ARROW")){
      spacecraft.addImage(scimg2);
      spacecraft.y=spacecraft.y-1;

    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scimg1);
      spacecraft.y=spacecraft.y+1;

    }
  
   // text(mouseX+","+mouseY,50,50)

  }
  if(spacecraft.x<=(iss.x-9) && spacecraft.y<=(iss.y+100)){
    hasDocked=true;
    textSize(32);
    fill("green");
    text("docking succesful",200,300)
   
  }
  drawSprites();
}