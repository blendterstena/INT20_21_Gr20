let bubble1;
let bubble2;

function setup() {
  let c=createCanvas(460, 250);
  bubble1 = new Bubble();
  bubble2 = new Bubble();
  c.position(50, 500);
}

function draw() {
  background(180, 169, 169);;
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}

class Bubble {
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
