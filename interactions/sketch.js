function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault())
}




// function keyPressed() {
//   fill(random(255), random(255), random(255), random(255));
//   ellipse(random(0, width), random(0, height), random(100), random(100));
// }

//noStroke()
// function mouseClicked() {
//   fill(random(255), random(255), random(255), random(255))
//   rect(mouseX, mouseY, (50, 200), random(0, 200));
// }



function mousePressed() {
  if (mouseButton === LEFT) {
    fill(random(255), random(255), random(255));
    rect(mouseX, mouseY, random(50, 150), random(50, 150));
  }
  else if (mouseButton === RIGHT) {
    ellipse(mouseX, mouseY, random(50, 150), random(50, 150));
  }
}

function keyPressed() {
  if (key === 'w' || key === 'W') {
    background(0);
} else  if (key === 'y' || key === 'Y'){
     fill(255, 0, 0);
     textFont("Arial");
     textAlign(CENTER);
     textSize(100)
     text('Current day /n' + 5, 50)

}
  if (key === 'd' || key === 'D') {
    fill(255, 0, 0);
    textFont("Arial");
    textAlign(CENTER);
    textSize(100);
    text("You have found the treasure", width / 2, height / 2);
  }
}
