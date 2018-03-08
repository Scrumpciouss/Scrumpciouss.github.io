// state variable assignment - replace with project title
// Aaron Phillips - replace with your name
// March 12, 2018 - replace with the date

// global variables
let state;
let x, y, radius;
let dx, dy;
// let ball, ballColour;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 250;
  y = 250;
  radius = 50;
  dx = random(2, 5);
  dy = random(2, 5);
  state = 1;

}

function draw() {
  background(255);

  if (state === 1) {
    displayMenuScreen();
  }
// if (state === 2)
//   startGame();
//   displayObjects();
//
}
// y click the play button to startGame
function displayMenuScreen() {
  let buttonWidth = 400;
  let buttonHeight = 200;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;
  rect(leftSide, rightSide, topSide, buttonWidth, buttonHeight);

  fill(0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(125);
  }
  if (mouseIsPressed) {
    state = 2;
  }

}
