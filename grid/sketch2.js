// grid painter
//Aaron Phillips
//March 26 2018

// define global variables
let rows = 30;
let cols = 30;
let grid;
let cellSize;
let slider;
let button;
// make the window canvas and set grid

function setup() {
  createCanvas(1000, 1000);

  // showing grid
  cellSize = width / cols;
  grid = make2DArray(cols, rows);
  // create button to clear screen.
  button = createButton("Reset");
    button.position(900, 500);
    button.mousePressed(changeBG)


  // color slider. p5.js
  colorMode(HSB);
slider = createSlider(100, 360, 60, 40);
slider.position(1000, 500);
slider.style('width', '80px');
}


function draw() {
  // change colors value. (r, g, b)
  var val = slider.value();
  background(val, 100, 100, 1);
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
// function to draw grid
function draw() {
  background(255);
  displayGrid();

}

function displayGrid() {
  for(let x=0; x<rows; x++){
    for (let y=0; y<cols; y++){
      if (grid[x][y] === 0) {
      //   fill(255, 0, 0);
      //
      // }
      // else {
      //   fill(255);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }

}

functions reset() {
  let val = random(255);
  background(val);
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
