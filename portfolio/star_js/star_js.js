var ballx = 300;
var bally = 300;
var ballSize = 60;
var score =0;
var gameState = "L1";
var img;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  textSize(20);

} // end setup

function preload() {
  img = loadImage('https://cheerchow.github.io/portfolio/stargif.gif');
 
}
function draw() {
  
  background(184, 216, 224);
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
  
  
text(("score: " + score), width/2, 40);
} // end draw

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
  line(ballx, bally, mouseX, mouseY);
  
  image(img, ballx, bally, ballSize, ballSize);
  
} //end level one


function levelTwo(){
  
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
  
  image(img,ballx, bally, ballSize, ballSize);
  
} //end level two


function levelThree(){
  
  text("Level 3", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2) {
   ballx=random(width);
   bally=random(height);
    score = score +1;
    ballSize= ballSize -1;
  }
 if (score>20){
    gamesState="L4";
 }
 
 
  function LevelFour(){
  
    text("you won", width/2, height-20);
  }

  
  image(img,ballx, bally, ballSize, ballSize);
  
} 
