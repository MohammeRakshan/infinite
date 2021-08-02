var man,mamImg
var backgroundImg,forest,wall
var score=0
var shock
var shockImg,shock2Img
var wave,gameoverImg
var PLAY = 1;
var END = 0;
var gameState = PLAY
var wavesGroup
var gameover
var nailImg,shockimg

function preload (){
mamImg = loadAnimation("man1.png","man2.png","man3.png","man5.png","man6.png")

backgroundImg = loadImage("back.png")
 
shockImg = loadImage("shockwave.png")
shock2Img = loadImage("shockwave2.png")
gameoverImg = loadImage("over.png")
nailImg = loadImage("shock5.png")
shockimg = loadImage("shock3.png")
}

function setup() {
createCanvas(600,400)
forest = createSprite(300,200,600,400)
forest.addImage(backgroundImg)
forest.x = forest.width/2;
forest.velocityX=-6

man = createSprite(50,250,20,50);
man.addAnimation ("Running",mamImg);
man.scale=0.65; 


wall = createSprite(50,270,400,10)
  wall.visible=false

gameover = createSprite(290,100)
gameover.addImage(gameoverImg)


man.setCollider("rectangle",0,0,10,110)
 //man.debug = true

wavesGroup = createGroup()
}

function draw() {
 background(0)


 
 
 

 
 

 if (forest.x < 250){
    forest.x = forest.width/2;
  }

 

man.collide(wall)
if(wavesGroup.isTouching(man)){
gameState = END
man.visible=false



}





 drawSprites()
 
 text("Score:"+score,10,10)


if(gameState === PLAY){
  gameover.visible = false
  score= score + Math.round(getFrameRate()/60)
  if(keyDown("space")&& man.y >=100){
    man.velocityY= -12
   }
   man.velocityY= man.velocityY + 0.8

   spawnShockWaves()
}
 else if(gameState === END){
  textSize(30)
  text("Press UP Arrow to Restart the Game",50,200)
 gameover.visible=true
 forest.velocityX=0 

wavesGroup.setVelocityEach(0)

if(keyDown(UP_ARROW)){
  reset();
 }


 }
 



  
 



    }

    function spawnShockWaves(){

      if(frameCount % 60 === 0){
     shock = createSprite(400,270,20,50)
    var rand = Math.round(random(1,5 ));
    shock.scale=0.25
    switch(rand) {
      
      case 1: shock.addImage(shockImg);
              break;
      case 2: shock.addImage(shock2Img);
              break;
      case 3: shock.addImage(shock2Img);
              break;
      case 4: shock.addImage(shockimg)
              break;
      case 5:  shock.addImage(nailImg)
               break;
      default: break;
      
    }
     
     shock.velocityX =-(3 + score/100)
     wavesGroup.add(shock)
     wavesGroup.setLifetime=300 ;
     shock.scale=0.20
     
   }
  }
 function reset(){

gameState=PLAY
gameover.visible=false
wavesGroup.destroyEach()
forest.velocityX=-6
man.visible=true

score=0



 }











