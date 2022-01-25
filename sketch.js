var leftKey, rightKey, upKey, downKey
var circle1, circle2, circle3, circle4




//function preload() {
 

function setup() {
  canvas = createCanvas(800,800);
   circle1 = createSprite(200,700, 10,10)
   circle2 = createSprite(350,700, 10,10)
   circle3 = createSprite(500,700, 10,10)
   circle4 = createSprite(650,700, 10,10)


}

function draw() {
 background("grey")

 arrowKeys();
 drawSprites()
}

function arrowKeys(){
if(frameCount%70===0){
  leftKey = createSprite(200,100,10,50)
  leftKey.velocityY= 5 
}
if(frameCount%40===0){
  rightKey = createSprite(350,100,10,50)
  rightKey.velocityY= 5 
}
if(frameCount%60===0){
  upKey = createSprite(500,100,10,50)
  upKey.velocityY= 5 
}
if(frameCount%10===0){
  downKey = createSprite(650,100,10,50)
  downKey.velocityY= 5 
}

}

