function setup() {
    createCanvas(800, 600);
}

let add = 0;

function draw() {
    background(0); 
    fill(89, 203, 232);
    circle( add, 300, 50);
    add= add + 5;
    if (add >= 800)
    add = 0;
}

