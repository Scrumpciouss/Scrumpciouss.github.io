// grid demo game of life
//Aaron Phillips
//March 26 2018
let rows = 30;
let cols = 30;
let grid;
let cellSize;
let autoPlay;


function setup() {
  // createCanvas(600, 600);
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight,windowHeight);

  }
  else {
    createCanvas(windowWidth,windowWidth);
  }
  cellSize = width / cols;
  grid = make2DArray(cols, rows);
  autoPlay = false;
}

// function autoPlayRequired() {
//   if (autoPlay && frameCount % 10 === 0){
//     nextTurn();
//   }
// }

function keyPressed() {
  if (key === "r" || key === "R") {
    grid = make2DArray(cols, rows);
  }
  else if(key === ""){
    grid = make2DArray(cols, rows);
  }
  else if (key === "c" || key === "C") {
    grid = makeEmpty2DArray(cols, rows);
  }
  else if (key === "a" || key === "A"){
    autoPlay = !autoPlay;
  }
}
function mousePressed() {
  let xcoord = floor(mouseX / cellSize);
  let ycoord = floor(mouseY / cellSize);

  if (grid[xcoord][ycoord]===1) {
    grid[xcoord][ycoord]=0;
    // nextTurn();
  }
  else {
    grid[xcoord][ycoord] = 1;
  }
}
function draw() {
  background(255);
  // autoPlayRequired();
  displayGrid();

}

// function nextTurn() {
//   let next =  makeEmpty2DArray(cols, rows);
//
//   for(let x=0; x<rows; x++){
//     for (let y=0; y<cols; y++){
//       let neighbors = 0;
//       for (let i=-1; i<=1; i++) {
//         for (let j=-1; j<=1; j++){
//           // don't break on edges
//           if (x+i >= 0 && x+i < cols && y+j >= 0 && y+j < rows){
//             neighbors += grid[x+i][y+j];
//           }
//         }
//       }
//       neighbors -= grid[x][y];
//
//       // apply rules of the game
//       if (grid[x][y] === 1) {
//         if (neighbors === 2 || neighbors === 3) {
//           next[x][y] = 1;
//         }
//         else{
//           next[x][y] = 0;
//         }
//       }
//       else {
//         if (neighbors === 3) {
//           next[x][y] - 1;
//         }
//         else{
//           next[x][y] = 0;
//         }
//       }
//     }
//   }
//   grid = next;
// }
function displayGrid() {
  for(let x=0; x<rows; x++){
    for (let y=0; y<cols; y++){
      if (grid[x][y] === 0) {
        fill(255);

      }
      else {
        fill(0);
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
function makeEmpty2DArray(cols, rows) {
  let randomGrid = [];
  for (let x=0; x<cols; x++) {
    randomGrid.push([]);
    for (let y=0; y<rows; y++){
      randomGrid[x].push(0);
    }

  }
  return  randomGrid;
}
