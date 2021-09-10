function setup() {
    createCanvas(400,300);
}

function draw() {
    background(255);
    circle(mouseX, mouseY, 20);
    if (mouseX > 200) {
        fill(255, 0, 0);
      } 
      else if (mouseX < 200) {
        fill(0, 0, 255);
    }
    line(width / 2, 0, width / 2, height);
    stroke(0);
}
