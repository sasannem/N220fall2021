function setup() {
    createCanvas(500, 500);
}

let add = 1;

function draw() {
    background(0); 
    fill(255, 255, 51)
    circle( 250, 250, add);
    add= add + 1;
    if (add >= 200)
    add = 1;
}