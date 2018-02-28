//Traffic Light Starter Code
//Dan Schellenberg
//Feb 23, 2018

//GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at processing.org/reference.
// global variables
let state;
let timeNow;
function setup() {
  createCanvas(600, 600);
}

function draw() {
  
  drawOutlineOfLights();
  fillInsideLights();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width / 2, height / 2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width / 2, height / 2 - 65, 50, 50); //top
  ellipse(width / 2, height / 2, 50, 50); //middle
  ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
}

function fillInsideLights() {

  if (state === 1) {
    fill(255, 0, 0, )
    ellipse(width / 2, height / 2 - 65, 50, 50); //top
  }
}
