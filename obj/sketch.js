// obj demo
// Dan Schellenberg - replace with your name
// March 5  2018 - replace with the date


let ball = {
  x: 200,
  y: 300,
  radius: 50,
};
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  fill(0);

  // follow mouse
  ball.x = mouseX;
  ball.y = mouseY;
  
  ellipse(ball.x, ball.y, ball.radius, ball.radius)
}
