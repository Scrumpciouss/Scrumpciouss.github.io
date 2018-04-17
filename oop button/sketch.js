// button oop
// Dan Schellenberg
// ap 16, 2018

// global variables
let myButton



function setup() {
  createCanvas(windowWidth, windowHeight);
  myButton = new Button(100, 50, 150, 75);

}

function draw() {
  background(255);
  myButton.display();
}

class Button{
  consrtuctor(x,y, buttonWidth, buttonHeight) {
     this.buttonWidth = 400;
     this.buttonHeight = 200;
     this.leftSide = width / 2 - this.buttonWidth / 2;
     this.topSide = height / 2 - this.buttonHeight / 2;
     this.rightSide = this.leftSide + this.buttonWidth;
     this.bottomSide = this.topSide + this.buttonHeight;
     // this.isClicked = false;
  }

  display() {
    fill(0);
    if (mouseX >= this.leftSide && mouseX <= this.rightSide && mouseY >= this.topSide && mouseY <= this.bottomSide) {
      fill(125);
      if (mouseIsPressed) {
        state = 2;
  }
  fill(0);
  if (mouseX >= this.leftSide && mouseX <= this.rightSide && mouseY >= topSide && mouseY <= this.bottomSide) {
    fill(125);
    // if (mouseIsPressed) {
    //   state = 2;
    // }
}
  rect(leftSide, topSide, buttonWidth, buttonHeight);
}

isClicked() {

}
