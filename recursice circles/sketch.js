let boxSize;
function setup() {
  createCanvas(windowWidth, windowHeight);
}




function draw() {
  background(255);
  let theLevel = int(map(mouseX, 0, width, 1, 8));
  drawCircle(width/2, width/2, theLevel);
  noStroke();
}


function drawCircle(x, radius, level) {
  let fillColor = 125 * level/4;
  fill(fillColor);
  ellipse(x,height/2, radius*2,radius*2);
  rect(x, 255, 255, 255);


  if ( level > 1) {
    level = level - 1;
    drawCircle(x - radius/2, radius/2, level);
    drawCircle(x + radius/2, radius/2, level);
  }
}
