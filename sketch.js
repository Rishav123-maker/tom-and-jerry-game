
var cat,mouse;
var catImg,mouseImg,catImg2,mouseImg2,catImg3,mouseImg3;
var background1Img;





function preload() {
    //load the images here
catImg  = loadAnimation("images/cat1.png");
mouseImg = loadAnimation("images/mouse1.png");
background1Img = loadImage("images/garden.png");
catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
catImg3 = loadAnimation("images/cat4.png");
mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   

    cat = createSprite(800,700,10,10);
    cat.addAnimation("cat",catImg);
    cat.scale = 0.2;
   

    mouse = createSprite(100,700,10,10);
    mouse.addAnimation("mouse",mouseImg);
    mouse.scale = 0.1;
    
}

function draw() {

    background(background1Img);
    //Write condition here to evalute if tom and jerry collide
    keyPressed();
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("cat last",catImg3);
        mouse.addAnimation("mouse last",mouseImg3);
   
        cat.changeAnimation("cat last",catImg3);
        mouse.changeAnimation("mouse last",mouseImg3);
       }
   



    drawSprites();
    text(mouseX + ',' + mouseY,10,45);
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("left")){
      cat.velocityX = -5;
      cat.addAnimation("cat running",catImg2);
      mouse.addAnimation("mouse teasing",mouseImg2);

      cat.changeAnimation("cat running",catImg2);
      mouse.changeAnimation("mouse teasing",mouseImg2);
  }

}
