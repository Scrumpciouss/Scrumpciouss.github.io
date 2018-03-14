let boxSize;

function setup() {
  if (windowWidth < windowHeight) {
      createCanvas(windowWidth, windowWidth);
}
else {
  createCanvas(windowHeight, windowHeight)
}
  boxSize = width / 8;
  isFilled = false;

}

function draw() {
  background(0);
  displayBoard()

}

function displayBoard() {
  for (i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (isFilled) {
        fill(0);
      }
      else {
        fill(255);
      }
      rect(boxSize * j, boxSize * i, boxSize, boxSize);
      isFilled = !isFilled;
    }
    isFilled = !isFilled;
  }

}
