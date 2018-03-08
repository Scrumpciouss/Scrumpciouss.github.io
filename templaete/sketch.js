let xBallCoords = [50];
let yBallCoords = [200];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  ballColour();

}


function mousePressed() {
  xBallCoords.push(mouseX);
  yBallCoords.push(mouseY);
}
function ballColour() {
  fill(0, 255, 0);
  for (let i=0; i<xBallCoords.length; i++){

    ellipse(xBallCoords[i], yBallCoords[i], 50, 50);

  }
}
