function setup() {
createCanvas(600, 600);
  background(221, 220, 246);
}

function draw() {
  
  fill(0);
  rect(150, 250, 300, 600);
  //back hair
  fill(212, 95, 175);
  arc(300, 640, 250, 450, PI, TWO_PI);
  //body
  
  fill(212, 95, 175);
  rect(270, 400, 60, 40);
  //neck
  fill(254, 244, 233);
  ellipse(300, 300, 250, 230);
  //face

  fill(0);
  arc(300, 260, 280, 280, PI, TWO_PI);
  //top hair
  
  fill(254, 244, 233);
  noStroke();
  triangle(288, 238, 351, 360, 288, 360);
  //add

  fill(254, 216, 222);
  ellipse(300, 350, 90, 80);
  //face
  fill(254, 244, 233);
  ellipse(300, 310, 120, 60);
  
  // lash
  fill(0);
  ellipse(240, 300, 60, 75);
  fill(0);
  ellipse(360, 300, 60, 75);
  fill(0);
 
  
  
  
  fill(250);
  ellipse(240, 300, 60, 70);
  fill(250);
  ellipse(360, 300, 60, 70);
  //eye high light
  
  fill(0);
  arc(360, 300, 60, 70, 0, PI + QUARTER_PI, OPEN);
  fill(0);
  arc(240, 300, 60, 70, 0, PI + QUARTER_PI, OPEN);
  //eye
  
  fill(253, 229, 235);
  ellipse(200, 350, 70, 20);
  fill(253, 229, 235);
  ellipse(400, 350, 70, 20);
  //blush
 
  
  
  
  }
