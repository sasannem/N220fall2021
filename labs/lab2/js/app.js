let radius = 10


function mouseClicked() {
    if (radius <= 50)
        radius += 10;


}

function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    background(0);
    circle(mouseX, mouseY, radius);


}

