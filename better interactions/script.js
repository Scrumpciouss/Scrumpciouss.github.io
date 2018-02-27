// globqal variables
let isMovingUp, isMoveingDown, isMovingleft, isMovingRight;
let redAmount;
let gravity;
let x, y, radius;
let beginShape;



function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  isMovingUp = false;
  isMovingleft = false;
  isMoveingDown = false;
  isMovingRight = false;
  redAmount = 0;
  x = width / 2;
  y = height / 2;
  radius = 50;

  // shapes
  // beginShape();
  // vertex(30, 20);
  // vertex(85, 20);
  // vertex(85, 75);
  // vertex(30, 75);
  // endShape(CLOSE);
}



function draw() {
  background(255);
  ellipse(width/2,height/2,100,200);

}

function moveStickman() {
  if (isMovingUp) {
    y -= 10;
  }
  else if (isMovingleft) {
    x -= 10;
  }
  if (isMovingRight) {
    x += 10;
  }
  else if (isMoveingDown) {
    y += 10;
  }
}

function keyPressed() {

  if (key === "w" || key === "W") {
    //
    isMovingUp = true;
  }
  else if (key === "a" || key === "A") {
    //
    isMovingleft = true
  }
  if (key === "s" || key === "S") {
    //
    isMoveingDown = true
  }
  else if (key === "d" || key === "D") {
    //
    isMovingRight = true
  }
}

function keyReleased() {

  if (key === "w" || key == "W") {
    //
    isMovingUp = false;
  }
  else if (key === "a" || key == "A") {
    //
    isMovingleft = false
  }
  if (key === "s" || key == "S") {
    //
    isMoveingDown = false
  }
  else if (key === "d" || key == "D") {
    //
    isMovingRight = false
  }
}

function drawStickman(x, y) {
  x = constrain(x, 0, width / 2);

  //body

  line(x, y, x, y + 100);

  // draw head of stickman
  fill(255, 255, 255);
  ellipse(x, y, 50, 50);
  // hat
  redAmount = (redAmount + 1) % 255
  redAmount += 1;
  redAmount = constrain(redAmount, 0, 255);
  if (redAmount === 255) {
    redAmount = 0
  }
  fill(redAmount, 0, 0)
  rect(x - 50, y - 50, 100, 30);
  rect(x - 25, y - 80, 50, 50);

  // arms
  line(x - 50, y + 50, x + 50, y + 50);

  // Legs\
  line(x, y + 100, x - 50, y + 150);
  line(x, y + 100, x + 50, y + 150);
}
// constrain to left side of screen
