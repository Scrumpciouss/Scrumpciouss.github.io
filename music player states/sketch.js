// DVD Bounce - The Office Shoutout
// Dan Schellenberg
// Feb 15, 2018

// global variables
let backgroundMusic;
let state;
let solar;
// let characterImage;

function preload() {
  solar = loadImage("images/solar.jpeg")


  backgroundMusic = loadSound("music/happy.mp3");


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // space(space,0,0);
  // x = width / 2;
  // y = height / 2;
  // backgroundMusic.setVolume(0.6);
  //  backgroundMusic.loop();



  state = 1;
}

function draw() {
  background(255);
  backgroundMusic.setVolume(0.9);
  if (state === 1) {
    displayStartScreen();
  }
  if (state === 2) {
    displayMusicPlaylist();
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

  image(solar, 0, 0);

  fill(0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    fill(125);
    if (mouseIsPressed) {
      state = 2;
    }
  }

  rect(leftSide, topSide, buttonWidth, buttonHeight);
}
// Just a little heads up don't listen with headphones
function displayMusicPlaylist() {
  image(solar, 0, 0);
  let buttonWidth = 400;
  let buttonHeight = 200;
  let leftSide = width / 8 - buttonWidth / 8;
  let topSide = height / 4 - buttonHeight / 4;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;
  fill(0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide) {
    backgroundMusic.play();
    fill(130);
    // backgroundMusic = LoadSound("music/happy.mp3");
    //backgroundMusic = loadSound("assets/Heroic Demise (New).mp3");



  }
  rect(200, 200, buttonWidth, buttonHeight);

}
