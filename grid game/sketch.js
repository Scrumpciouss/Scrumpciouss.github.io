// grid demo game of life
//Aaron Phillips
//March 26 2018
let rows = 30;
let cols = 30;
let grid;
let cellSize;


function setup() {
  createCanvas(600, 600);
  cellSize = width / cols;
  grid = make2DArray(cols, rows);
}

function draw() {
  background(255);
  displayGrid();
  displayPlayer();
}

function displayGrid() {
  for(let x=0; x<rows; x++){
    for (let y=0; y<cols; y++){
      if (grid[x][y] === 0) {
        fill(255);

      // }
      // else {
      //   fill(255);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }

}

// class for player.
function displayPlayer(){

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
