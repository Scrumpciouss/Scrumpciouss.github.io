// grid demo game of life
//Aaron Phillips
//March 26 2018
let rows = 10;
let cols = 10;
let grid;
let cellSize;


function setup() {
  createCanvas(600, 600);
  cellSize = width / cols;
  grid = make2DArray(cols, rows);
}
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
function draw() {
  background(255);
  displayGrid();

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
