var img;
var img2;
var img3;
var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState = "L1";
var choice = '1';


function preload() {

  img = loadImage('https://cheerchow.github.io/portfolio/stargif.gif');
 img2 = loadImage('https://cheerchow.github.io/portfolio/image/star4.png');
 img3 = loadImage('https://cheerchow.github.io/portfolio/image/star2.gif');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  

} // end setup   =================================================================


function draw() {
 cursor(HAND);
   background(50, 97, 173);
  if (gameState == "L1"){
  levelOne();
  }
  if (gameState =="L2"){
    levelTwo();
  }
    if (gameState =="L3"){
    levelThree();
  }
   if (gameState =="L4"){
    levelFour();
  }
   if (gameState =="L5"){
    levelFive();
  }
  if (gameState =="L6"){
    levelSix();
  }
text(("score: " + score), width/2, 40);
} // end draw  ===============================================================

function levelOne(){
  
  text("Level 1", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2) {
   ballx=random(width);
   bally=random(height);
    score = score +1;
  }
  if (score>=5){
  gameState ="L2";
  }
//  line(ballx, bally, mouseX, mouseY);
   image(img3, ballx, bally, 50, 50);
//  ellipse(ballx, bally, ballSize, ballSize);
  
} //end level one  ==============================================================


function levelTwo(){
   background(89, 129, 194);
  text("Level 2", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2) {
   ballx=random(width);
   bally=random(height);
    score = score +1;
  }
  if (score>=10){
    gameState ="L3";
  }
//  line(ballx, bally, mouseX, mouseY);
  image(img, ballx, bally, 50, 50);
//  ellipse(ballx, bally, ballSize, ballSize);
  
} //end level two  =============================================================


function levelThree(){
   background(144, 170, 212);
  text("Level 3", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2) {
   ballx=random(width);
   bally=random(height);
    score = score +1;
//    ballSize= ballSize -1;
  }
  if (score>=15){
    gameState ="L4";
  }

//   ellipse(ballx, bally, ballSize, ballSize);
 image(img2, ballx, bally, 50, 50);
  
} //end level three   =========================================================


function levelFour(){
   background(144, 170, 212);
  text("Level 4", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2) {
   ballx=random(width);
   bally=random(height);
    score = score +1;
 //   ballSize= ballSize -1;
  }
  if (score>=20){
    gameState ="L5";
  }

//   ellipse(ballx, bally, ballSize, ballSize);
  image(img, ballx, bally, 50, 50);
  
} //end level four   ====================================================


function levelFive(){
  
  text("Winner!", width/2, height-20);
  
}
