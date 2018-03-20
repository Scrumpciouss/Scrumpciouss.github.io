// stupid puns and shapes - replace with project title
// Aaron Phillips - replace with your name
// Feb 26, 2018 - replace with the date

// global variables


// the preload function guarentees that the code inside the function is
// executed before the rest of the program runs -- helpful for things
// like loading images (since JS is asynchronous)


// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault())
}

function draw() {


}



function mousePressed() {
  noStroke();
  fill(random(255), random(255), random(255), random(255));

  if (mouseButton === LEFT) {
    rect(mouseX, mouseY, random(50, 150), random(50, 150));
  }
  else if (mouseButton === RIGHT) {
    ellipse(mouseX, mouseY, random(50, 150), random(50, 150));
  }
}

function keyPressed() {
  if (key === 'w' || key === 'W') {
    background(255);
  }
  else if (key === 'b' || key === 'B') {
    background(0);
  }
  if (key === 'd' || key === 'D') {
    fill(255, 0, 0);
    textFont("Arial");
    textAlign(RIGHT, TOP);
    textSize(50);
    text("what do you call a pile of cats?", width / 2, height / 2);
  }
  else if (key === 'm' || key === 'M') {
    fill(255, 0, 0);
    textFont("Arial");
    textAlign(LEFT, TOP);
    textSize(50);
    text("A Meowtain ", width / 2, height / 2)
  }
}
