// globqal variables
let x;
let y;
let isMovingUp, isMoveingDown, isMovingleft, isMovingRight;
let redAmount ;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  isMovingUp = false;
  isMovingleft = false;
  isMoveingDown = false;
  isMovingRight = false;
  redAmount = 0;
}

function draw() {
  background(255);

  moveStickman();

  drawStickman(mouseX, mouseY);
  drawStickman(x, y);
}

function moveStickman() {
  if (isMovingUp) {
    y -= 10;
  }

}

function keyPressed() {

  if (key === "w" || key === "W") {
    //
    isMovingUp = true;
  } else if (key === "a" || key === "A") {
    //
    isMovingleft = true
  }
  if (key === "s" || key === "S") {
    //
    isMoveingDown = true
  } else if (key === "d" || key === "D") {
    //
    isMovingRight = true
  }
}

function keyReleased() {

  if (key === "w" || key == "W") {
    //
    isMovingUp = false;
  } else if (key === "a" || key == "A") {
    //
    isMovingleft = false
  }
  if (key === "s" || key == "S") {
    //
    isMoveingDown = false
  } else if (key === "d" || key == "D") {
    //
    isMovingRight = false
  }
}

function drawStickman(x, y) {
// constrain to left side of screen
x = constrain(x,0,width/2);

  //body

  line(x, y, x, y + 200);

  // draw head of stickman
  fill(255, 255, 255);
  ellipse(x, y, 100, 100);
  // hat
  redAmount = (redAmount + 1 ) % 255
  redAmount += 1;
  redAmount = constrain(redAmount, 0, 255);
  if (redAmount === 255) {
    redAmount = 0
  }
  fill(redAmount, 0, 0)
  rect(x - 50, y - 80, 100, 30);
  rect(x - 25, y - 130, 50, 50);

  // arms
  line(x - 50, y + 100, x + 50, y + 100);

  // Legs\
  line(x, y + 200, x - 50, y + 250);
  line(x, y + 200, x + 50, y + 250);


}
