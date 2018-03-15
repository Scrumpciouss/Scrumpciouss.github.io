// state variable assignment - replace with project title
// Aaron Phillips - replace with your name
// March 12, 2018 - replace with the date

// global variables
let state;
let x, y, radius;
let dx, dy;
let ball, ballColour;
// let ball, ballColour;

function preload(){
  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  radius = 50;
  dx = random(2, 5);
  dy = random(2, 5);
  ballColour = color(0);
  state = 1;

}

function draw() {
  background(255);

  if (state === 1) {
    displayMenuScreen();

  }
  if (state === 2){
    displayGame();
    moveObject();
  }
// if (state === 2)
//   startGame();
//   displayObjects();
//
}
//  click the play button to startGame
function displayMenuScreen() {
  let buttonWidth = 400;
  let buttonHeight = 200;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;


  fill(0, 255);


  // fill(20);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(125);
    if (mouseIsPressed) {
      state = 2;
    }
    rect(leftSide, topSide, buttonWidth, buttonHeight);
  }

}
function moveObject() {
  x += dx;
  y += dy;

  // if object has hit something
  if (y + ball.height / 2 >= height || y - ball.height / 2 <= 0){
    dy = dy * -1;
    ballColour = color(random(255), random(255));
  }
  if (x + ball.width / 2 >= height || x - ball.width / 2 <= 0){
    dx = dx * -1;
  }
}
function displayGame() {
  fill(0);
  ellipse(x,y, radius * 2, radius * 2);
}
