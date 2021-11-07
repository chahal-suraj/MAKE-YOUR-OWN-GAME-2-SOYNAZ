var fish,fishImg;
var shark,sharkImg;
var bgImg;
var bg;
var go,goImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var sharkGroup,foodGroup;
var food,foodImg;
var score=0;
var gameOver,gameOverImg;

function preload(){
  fishImg = loadImage("Imported piskel (15).gif");
  sharkImg = loadImage("Imported piskel (16).gif");
  bgImg = loadImage("Imported piskel (17).gif");
  goImg = loadImage("gameOver.png");
  foodImg = loadImage("food.gif");
  gameOverImg = loadImage("gameOver.png")

}
function setup() {
  createCanvas(600, 600);
  
 
  bg = createSprite(300,300);
  bg.addImage(bgImg);
  bg.scale = 3.2
  bg.velocityX = -2;
  

  fish = createSprite(100,200,20,20);
  fish.addImage(fishImg);
  fish.scale = 0.2;

  gameOver = createSprite(300,300);
    gameOver.addImage(gameOverImg);
    gameOver.scale = 0.5;
  
  


  sharkGroup = new Group();
  foodGroup = new Group();

 
  
}

function draw() {
  text("score = "+score,300,300)
  background(0);
  

  if(gameState === PLAY){
  
    gameOver.visible = false;

  if(bg.x < 0){
    bg.x = bg.width/2;
  }

  if(keyCode === UP_ARROW){
    fish.y -= 2;
  }

  if(keyCode === DOWN_ARROW){
    fish.y += 2;
  }
  spawnshark()
  spawnfood();
  }
 
  
  if(fish.isTouching(sharkGroup)){
    gameState = END
  }

  if(fish.isTouching(foodGroup)){
     score += 1;
     foodGroup.destroyEach();
  }

  if(keyCode === RIGHT_ARROW){
    reset();
  }
 
  if(gameState===END){
    fish.visible = false;
    sharkGroup.destroyEach();
    foodGroup.destroyEach();
    bg.velocityX =0;
    gameOver.visible = true;
    score =0
  }

  

  

  drawSprites();
  textSize(20);
  fill(255);
  text("score: "+ score,450,50);
}

   
function spawnshark() {
  if (frameCount % 200 === 0) {
    var shark = createSprite(600,120,40,10);
    shark.x = Math.round(random(800,1100));
    shark.y = Math.round(random(100,500));
    shark.addImage(sharkImg);
    shark.scale = 0.5;
    shark.velocityX = -3
    shark.lifetime = 800;
    sharkGroup.add(shark)
  }
}

function spawnfood() {
  if (frameCount % 100 === 0) {
    var food = createSprite(600,120,40,10);
    food.x = Math.round(random(800,1100));
    food.y = Math.round(random(100,500));
    food.addImage(foodImg);
    food.scale = 0.1;
    food.velocityX = -3
    food.lifetime = 800;
    foodGroup.add(food)
  }
}

function reset(){
  gameState = PLAY;
  gameOver.visible = false;
  bg.velocityX =-2;
  fish.visible = true;


}
