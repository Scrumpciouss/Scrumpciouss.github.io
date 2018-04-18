// ball oop
// april 16

let ballArray = [];


function setup () {
  createCanvas(windowWidth,windowHeight);

}

function draw(){
  background(255);

  for(let i=0; i<Bubble.length; i++) {
    Bubble.jiggle();
    Bubble.display();

  }


}
// function mousePressed() {
//   ballArray.goto (mouseX, mouseY);
// }



class Timer {
  constructor(waitTime) {
    this.waitTime = waitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }


  reset(newWaitTime) {
    this.waitTime = newWaitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }

  isDone() {
    if (millis() >= this.finishTime) {
      return true;
    }
    else {
      return false;
    }
  }
}



class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 50;
  }

  display() {
    fill(0);
    ellipse(this.x, this.y, this.radius, this.radius);
  }
  jiggle() {
    this.x += random(-3, 3);
    this.y += random(-3, 3);
  }
  // goTo(x, y) {
  //   this.x = x;
  //   this.y = y;
  // }
}
