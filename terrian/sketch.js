// Aaron Phillips


let heights= [];
let numberOfRectangles = 100;
let heighestPoint;
function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRectangles = width;
  generateInitialTerrian(numberOfRectangles);
  heighestPoint = height;
}

function draw() {
  background(255);
  displayTerrian();

}



function generateInitialTerrian (numberOfRectangles) {
  let time = 0;
  let dt = 0.005;

  for (let i=0; i<numberOfRectangles; i++) {
    let currentHeight = noise(time)*500;
    heights.push(currentHeight);
    time += dt;
  }

}

function displayTerrian() {
  let rectWidth = width / numberOfRectangles;
  rectMode(CORNERS);
  fill(0);
  stroke(0);
  for (let i=0; i<numberOfRectangles; i++){
    rect(i*rectWidth, height, (i+1)*rectWidth, height - heights[i]);
  }

}
function plantFlag () {
  let highestX;
  let rectWidth = width / numberOfRectangles;
  let tallest = 0;
  for (let i=0; i === heighestPoint; i++){
    if (heighestPoint[i] > tallest) {
      tallest = height[i];
      highestX = i*rectWidth;
    }

  }
  let highestY = height - tallest;
  stroke(255, 0, 0);
  line(0, tallest,width, tallest);

  // flag
  ellipse(highestX, highestY, 50, 50);

}
