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





// grid painter
//Aaron Phillips
//March 26 2018

// define global variables
let rows = 10;
let cols = 10;
let grid;
let cellSize;

// make the window canvas and set grid

function setup() {
  createCanvas(windowWidth, windowHeight);


  cellSize = width / cols;
  grid = make2DArray(cols, rows);
}
// function to change grid color on press.

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
// function to draw grid
function draw() {
  background(255);
  displayGrid();

}

function displayGrid() {
  for(let x=0; x<rows; x++){
    for (let y=0; y<cols; y++){
      if (grid[x][y] === 0) {
        fill(255, 0, 0);

      }
      else {
        fill(255);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }

}

function make2DArray(cols, rows) {
  let randomGrid = [];
  for (let x=0; x<cols; x++) {
    randomGrid.push([]);
    for (let y=0; y<rows; y++){
      if (random(100) < 50){
        randomGrid[x].push(0);
      }
      else {
        randomGrid[x].push(1);
      }
    }

  }
  return  randomGrid;
}
