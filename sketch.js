var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,endImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashGroup,diamondsGroup,jwelleryGroup,swordGroup;

var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(500,500);
// Moving background
path=createSprite(250,250);
path.addImage(pathImg);
path.velocityY = 4;
  


//creating boy running
boy = createSprite(70,330,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashGroup=new Group();
diamondsGroup=new Group();
jwelleryGroup=new Group();
swordGroup=new Group();
  
 

}

function draw() {

  background(0);
  boy.x = World.mouseX;
  
  
  if(gameState === PLAY){
    
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
    
    if(path.y > 400 ){
    path.y = height/2;
      }
    
    if(swordGroup.isTouching(boy)) {
        swordGroup.destroyEach();
        swordGroup.setVelocityYEach(0);
        gameState=END;
    }
  }
  
   if(gameState===END){
    path.velocity=0;
    boy.addAnimation("SahilRunning",endImg);
    boy.scale=0.4 
    boy.x=200;
    boy.y=200;
    
      }
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
 
  

    if (cashGroup.isTouching(boy)) {
      cashGroup.destroyEach();
      cashGroup.setVelocityYEach(0);
    treasureCollection=treasureCollection+30
    }
    else if (diamondsGroup.isTouching(boy)) {
      diamondsGroup.destroyEach();
      diamondsGroup.setVelocityYEach(0)
      treasureCollection=treasureCollection+70
      
    }else if(jwelleryGroup.isTouching(boy)) {
      jwelleryGroup.destroyEach();
      jwelleryGroup.setVelocityYEach(0)
      treasureCollection=treasureCollection+50
    }
     
      
        
  
  

  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);
}


function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashGroup.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsGroup.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryGroup.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}