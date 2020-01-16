var scaleX;
var scaleY;
var min;
var max;
var radius;
var r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  smooth()
}

function drawEllipse() {
  noFill()
  stroke(255, 255, 255, 28)
  ellipse(0, 0, 120, 80)
}

function draw() {
  scaleX = map(mouseX, 0, windowWidth, 1.5, 11.5)
  scaleY = map(mouseY, 0, windowHeight, 1.5, 11.5)

  background(0)
  translate(windowWidth/2, windowHeight/2)
  for (let i = 0; i < 360; i += 0.5) {
    push()
    rotate(radians(i))
    translate(0, 200)

    rotate(radians(i * 3))
    scale(map(sin(radians(i * scaleX)), 1, 1, 0.5, 1), map(sin(radians(i * scaleY)), 1, 1, 0.5, 1))
    drawEllipse()
    pop()
  }
}
