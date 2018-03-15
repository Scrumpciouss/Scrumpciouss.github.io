//sound effects demo


let backgroundMusic;
let laserSound;

function preload() {
  backgroundMusic = loadSound("assets/Orbital Colossus.mp3");
  laserSound = loadSound("Laser-Fire-sfx_ogg.7s");
}
function setup() {
  createCanvas(windowWidth, windowWidth);
  backgroundMusic.setVolume(0.6);
  backgroundMusic.loop();
  laserSound.setVolume(0.9);
}


function draw() {

}

function mousePressed() {
  fill(random(255), random(255), random(255), random(255));
  noStroke();
  ellipse(random(width), random(height), 50, 50);
}
