// ball oop
// april 16

let bubbleArray = [];
let bubbleTimer;

function setup () {
  createCanvas(windowWidth,windowHeight);

  bubbleArray.push(new Bubble(random(width), height, 25));
}

function draw(){
  background(255);


  for(let i=0; i<Bubble.length; i++) {

    bubbleArray[i].move();
    bubbleArray[i].display();
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
    // this.startTime = millis();
    // this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }

  start() {
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
    this.dy = random(-2, -1);
    this.bubbleTimer = new Timer(1000);
    this.topHasBeenTouched = false;
  }

  display() {
    if (!this.bubbleTimer.isDone()) {
      noStroke();
      fill(0);
      ellipse(this.x, this.y, this.radius*2, this.radius*2);
    }

  }
  move() {
    if(floor(this.y) > 0 + floor(this.radius)) {
      this.y += this.dy;
    }
    if (!this.topHasBeenTouched) {
      this.y = 0 + this.radius;
      this.bubbleTimer.start();
    }
    else {
      this.topHasBeenTouched = true;
      this.y = 0 + this.radius;
      this.bubbleTimer.start;
    }
    this.x += random(-3, 3);
    this.y += random(-3, 3);
  }
  // goTo(x, y) {
  //   this.x = x;
  //   this.y = y;
  // }
}
