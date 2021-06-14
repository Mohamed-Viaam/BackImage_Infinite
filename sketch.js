var backImg, back;
var a = 0;
var b;

var scrollSpeed = 2;

function preload(){
  backImg = loadImage("backImg.png");


}

function setup() {
  createCanvas(500, 200);
  b = width;


  /*back = createSprite(306, 120.5);
  back.addImage(backImg);
  //back.scale = 1.8;
  back.velocityX = -3;*/
}

function draw() {
  image(backImg, a, 0, width, height);
  image(backImg, b, 0, width, height);

  a -= scrollSpeed;
  b -= scrollSpeed;

  if (a < -width){
    a = width;
  }
  if (b < -width){
    b = width;
  }
}