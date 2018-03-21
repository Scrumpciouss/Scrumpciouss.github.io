// DVD Bounce - The Office Shoutout
// Dan Schellenberg
// Feb 15, 2018

// global variables
let backgroundMusic;
let state;
// let characterImage;

// function preload() {
//   // characterImage = loadImage("images/nameOfFile.png");
//   bakcgroundMusic = loadSound("assests/Heroic Demise (New).mp3");
//   backgroundMusic = loadSound("assests/Rise of spirit.mp3");
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  // x = width / 2;
  // y = height / 2;
  // backgroundMusic.setVolume(0.6);
  // backgroundMusic.loop();



  state = 1;
}

function draw() {
  background(255);
  if (state === 1) {
    displayStartScreen();
  }
  if (state === 2) {
    // loadMusicSelect1();
    // loadMusicSelect2();
    // loadMusicSelect3();
    // loadMusicSelect4();
  }
  // image(characterImage, 0, 0);
}
// main button to start program
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

function loadMusicSelect1() {
  let buttonWidth = 300;
  let buttonHeight = 200;
  let leftSide = width / 2 - buttonWidth / 2;
  let topSide = height / 2 - buttonHeight / 2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;
  fill(0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    // backgroundMusic.play();
    fill(125);
  


  }
}
