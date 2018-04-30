// grid painter
//Aaron Phillips
//April 24 2018

// define global variables
let rows = 20;
let cols = 20;
let grid;
let cellSize;
let button;
let red = 4;
let green = 2;
let blue = 3;
let black = 1;
let white = 0;
let currentColor;

// make the window canvas and set grid

function setup() {
  createCanvas(602, 602);

  // showing grid
  cellSize = (width - 2) / cols;
  grid = make2DArray(cols, rows);

  // color button. p5.js
  button = createButton("green");
  button = createButton("blue");
  button = createButton("red");
  button = createButton("black");
}


function draw() {
  // change colors value. (r, g, b)

  background(255);
  displayGrid();

  // cellColor();
  // currentColor()
}

// switches between balck and white
function mousePressed() {
  let xcoord = floor(mouseX / cellSize);
  let ycoord = floor(mouseY / cellSize);

  if (grid[xcoord][ycoord]===1) {
    grid[xcoord][ycoord]=0;

  }
  else {
    grid[xcoord][ycoord] = 1;
  }

}


function cellColor() {

  let green = color(0, 255, 0);
  let blue = color(0, 0, 255);
  let red = color(255, 0, 0);
  let white = color(255);
  let black = color(0);
}

function displayGrid() {
  for(let x=0; x<rows; x++){
    for (let y=0; y<cols; y++){
      if (grid[x][y] === 0) {
        fill(0);

      }
      else {
         fill(255);
      }

      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }

}

// reset grid
function keyPressed() {
  if (key === "w" || key === "W") {
    displayGrid(255);
  }
}


// switches color between white and colour.
function mousePressed() {
  let xcoord = floor(mouseX / cellSize);
  let ycoord = floor(mouseY / cellSize);

  if (grid[xcoord][ycoord]) {
    grid[xcoord][ycoord]=0;

  }
  else {
    grid[xcoord][ycoord] = 1;
  }



}
function displayPixel() {
  for (let i = 0; i < locations.length; i++) {
    stroke(0);
    fill(0);
    rect(locations[i][0], locations[i][1], segmentSize, segmentSize);
  }
}




// array of grid
function make2DArray(cols, rows) {
  let randomGrid = [];
  for (let x=0; x<cols; x++) {
    randomGrid.push([]);
    for (let y=0; y<rows; y++){
      if (random(100) < 50){
        randomGrid[x].push(255);
      }
      else {
        randomGrid[x].push(255);
      }
    }

  }
  return  randomGrid;
}
