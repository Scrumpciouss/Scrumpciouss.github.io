let boxSize;

function setup() {
    createCanvas(windowWidth, windowWidth);
    noCursor()

}

function draw() {
  background(0);
  displayDots()

}

function displayDots() {
  let pointSpacing = 100;
  for (x = pointSpacing; x < width; x+= pointSpacing) {
    for (let y = pointSpacing; y < height; y+= pointSpacing) {
      fill(255);
      ellipse(x, y, 4, 4);
      stroke(255, 120);
      line(x, y, mouseX, mouseY);
    }
  }
}
