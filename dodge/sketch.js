// DVD Bounce - The Office Shoutout
// Dan Schellenberg
// Feb 15, 2018

// global variables
let heights= [];
let numberOfRectangles = 100;
let x, y, radius;
let dx, dy;
let isMovingUp, isMovingDown, isMovingRight, isMovingLeft;
let state;
// let characterImage;

function preload() {
  // characterImage = loadImage("images/nameOfFile.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  radius = 50;
  dx = random(2, 5);
  dy = random(2, 5);

  state = 1;
}

function draw() {
  background(255);
  if (state === 1) {
    displayStartScreen();
  }
  if (state === 2) {
    loadTerrian();
  }
  // image(characterImage, 0, 0);
}

function displayStartScreen() {
  let buttonWidth = 400;
  let buttonHeight = 200;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  fill(0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(125);
    if (mouseIsPressed) {
      state = 2;
    }
  }

  rect(leftSide, topSide, buttonWidth, buttonHeight);
}

function keyPressed() {
  if (key === "w" || key === "W") {
    isMovingUp = true;
  }
  if (key === "a" || key === "A") {
    isMovingLeft = true;
  }
  if (key === "d" || key === "D") {
    isMovingRight = true;
  }
  if (key === "s" || key === "S") {
    isMovingDown = true;
  }
}

function keyReleased(){
  if (key === "w" || key === "W") {
    isMovingUp = false;
  }
  if (key === "a" || key === "A") {
    isMovingLeft = false;
  }
  if (key === "d" || key === "D") {
    isMovingRight = false;
  }
  if (key === "s" || key === "S") {
    isMovingDown = false;
  }
}
function loadTerrian() {
  let rectWidth = width / numberOfRectangles;
  rectMode(CORNERS);
  fill(0);
  for (let i=0; i<numberOfRectangles; i++){
    rect(i*rectWidth, height, (i+1)*rectWidth, height - heights[i]);
  }
}
