var ground, groundImage;
var blueballoon, blueballoonImage
var pinkballoon, pinkballoonImage
var greenballoon, greenballoonImage
var redballoon, redballoonImage
var arrow,arrowImage
var bow, bowImage;
var person, personImage
var redbgroup, greenbgroup, bluebgroup, pinkbgroup, arrowgroup    
var score



function preload(){
 //load your images here 
 groundImage = loadImage("background0.png")
pinkballoonImage = loadImage("pink_balloon0.png")
blueballoonImage = loadImage("blue_balloon0.png")
redballoonImage = loadImage("red_balloon0.png") 
greenballoonImage = loadImage("green_balloon0.png")
bowImage = loadImage("bow0.png")
arrowImage = loadImage("arrow0.png")
personImage = loadImage("person.png")

}

function setup() {
  createCanvas(600, 600);
  ground = createSprite(200,200,600,600);
ground.addImage("background",groundImage);
  ground.scale = 2
//ground.x = ground.width /2;
// balloon.addImage("baloonimage",balloonImage)
//pinkballoon2
  
bow = createSprite(550,200,40,40)
  bow.addImage("bowImage", bowImage)
person = createSprite(500,450,100,100)
  person.addImage("person", personImage)
  person.scale = 0.3
  score = 0
  
redbgroup=new Group()
bluebgroup = new Group()
pinkbgroup = new Group()
greenbgroup = new Group()
arrowgroup = new Group()
  
//ground.velocityX = -4;
  //add code here
  
}

function draw() {
if (ground.x < 0) {
  ground.x = ground.width / 2;
}
bow.y = World.mouseY
if(keyDown("space")){
var temparrow=createarrow()
 temparrow.addImage("arrowImage",arrowImage)
  temparrow.y = bow.y

}
  if (arrowgroup.isTouching(redbgroup)){
    arrowgroup.destroyEach();
    redbgroup.destroyEach();
    score = score + 1
  }
   if (arrowgroup.isTouching(bluebgroup)){
    arrowgroup.destroyEach();
    bluebgroup.destroyEach();
    score = score + 2
  
  }
   if (arrowgroup.isTouching(greenbgroup)){
    arrowgroup.destroyEach();
    greenbgroup.destroyEach();
    score = score + 3
  }
   if (arrowgroup.isTouching(pinkbgroup)){
    arrowgroup.destroyEach();
    pinkbgroup.destroyEach();
    score = score + 1
  }
var collectballoon = Math.round(random(1,4))
if(World.frameCount %80 == 0){
  if(collectballoon == 1){
    redballoonfunction()
  }
  if(collectballoon == 2){
    blueballoonfunction()
  }
  if(collectballoon == 3){
    pinkballoonfunction()
  }
  if(collectballoon == 4){
    greenballoonfunction()
  }
}
drawSprites();
  textSize(20)
  text("score = "+score, 400,20)
  //add code here
  
}
function createarrow(){
  arrow = createSprite(550,200,40,40)
  arrow.velocityX = -6
  arrow.scale = 0.3
  arrowgroup.add(arrow)
  return arrow
}

 function greenballoonfunction(){
   var rand = Math.round(random(30,500))
   var green = createSprite(0,rand,10,10);
   green.addImage(greenballoonImage)
   green.velocityX = 3
   greenbgroup.add(green)
   green.scale = 0.1
 }
function redballoonfunction(){
   var rand = Math.round(random(30,500))
   var red = createSprite(0,rand,10,10);
   red.addImage(redballoonImage)
   red.velocityX = 3
  redbgroup.add(red)
   red.scale = 0.1
 }
function blueballoonfunction(){
   var rand = Math.round(random(30,500))
   var blue = createSprite(0,rand,10,10);
   blue.addImage(blueballoonImage)
   blue.velocityX = 3
  bluebgroup.add(blue)
   blue.scale = 0.1
 }
function pinkballoonfunction(){
   var rand = Math.round(random(30,500))
   var pink = createSprite(0,rand,10,10);
   pink.addImage(pinkballoonImage)
 pinkbgroup.add(pink)
   pink.velocityX = 3
   pink.scale = 1
 }