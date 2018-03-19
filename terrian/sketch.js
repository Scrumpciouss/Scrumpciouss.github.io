


let heights= [];
let numberOfRectangles = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRectangles = width;
  generateInitialTerrian(numberOfRectangles);
}

function draw() {
  background(255);
  displayTerrian();

}



function generateInitialTerrian (numberOfRectangles) {
  for (let i=0; i<numberOfRectangles; i++) {
    heights.push(random(100, 500));
  }

}

function displayTerrian() {
  let rectWidth = width / numberOfRectangles;
  rectMode(CORNERS);
  fill(0);
  for (let i=0; i<numberOfRectangles; i++){
    rect(i*rectWidth, height, (i+1)*rectWidth, height - heights[i]);
  }

}
