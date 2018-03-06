// state variable assignment - replace with project title
// Aaron Phillips - replace with your name
// March 12, 2018 - replace with the date

// global variables
let state;





function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  radius = 50;
  dx = random(2, 5)
  dy = random(2, 5)
  fill(0)
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
// }
// y click the play button to startGame
function displayMenuScreen() {
  let buttonWidth = 400;
  let buttonHeight = 200
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

}
