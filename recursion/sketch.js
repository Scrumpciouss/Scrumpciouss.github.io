let boxSize;

function setup() {
  createCanvas(windowWidth,windowHeight);
  print(factorial(150));
}

function draw() {
  background(0);


}

function factorial(n) {
  // base case
  if (n === 1 || n === 0) {
    return 1;
  }
  else {
    return n* factorial(n-1);
  }
}
