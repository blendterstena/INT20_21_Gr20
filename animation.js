let circle1;
let circle2;

function setup() {
  let c=createCanvas(460, 250);
  circle1 = new circle();
  circle2 = new circle();
  c.position(50, 200);
}

function draw() {
  background(180, 169, 169);;
  circle1.move();
  circle1.show();
  circle2.move();
  circle2.show();
}

class circle {
  constructor(x, y, r) {
    this.x = 200;
    this.y = 150;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(48,75,95);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }
}

var i = 0;
function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()",500);
}
timedCount();