let lightSwitch;

function setup() {
  createCanvas(windowWidth, windowHeight, )
  nostroke();
  mode = 1;
}

function draw() {
  // draw rectangles
  fill (random(255), random(255));
  if(mode === 1) {
  rect(random(width), random(height), random(50, 200), random(50, 200))
}
else if (mode === 2) {
  rect(random(width), random(height), random(50, 200), random(50, 200))
}
 else {
   fill (random(255), random(255))
   ellipse(random(width), random(height), random(50, 200))
 }

}
function draw() {
  drawLight();
}

//function keyTyped() {
//  if (key === ' ') {
//    lightSwitch = !lightSwitch;
//    return false
  }
}

function drawLight() {
  if (lightSwitch === true) {
    fill(255);
  } else {
    fill(0);
  }
  rectMode(CENTER);
  rect(width / 2, height / 2, 200, 200, )
}

function draw() {
  background(random(175, 75))
}

function mouseClicked() {
  if (mouseLeft === LEFT)
    fill(75)
  rect((0, width), (0, height), random(200), random(200));
}
