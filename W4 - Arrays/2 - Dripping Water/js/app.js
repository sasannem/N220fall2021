let yPos = [0, -50, -100, -150, -200, -250, -300, -350, -400, -450, -500,]

function setup(){
    createCanvas(500, 500);
}

function draw(){
    background(0);
    fill(0, 223, 255);
    circle( 250, yPos[0], 20);
    yPos[0]+= 5;

    circle( 250, yPos[1], 20);
    yPos[1]+= 5;
    
    circle( 250, yPos[2], 20);
    yPos[2]+= 5;

    circle( 250, yPos[3], 20);
    yPos[3]+= 5;

    circle( 250, yPos[4], 20);
    yPos[4]+= 5;

    circle( 250, yPos[5], 20);
    yPos[5]+= 5;

    circle( 250, yPos[6], 20);
    yPos[6]+= 5;

    circle( 250, yPos[7], 20);
    yPos[7]+= 5;

    circle( 250, yPos[8], 20);
    yPos[8]+= 5;

    circle( 250, yPos[9], 20);
    yPos[9]+= 5;

    circle( 250, yPos[10], 20);
    yPos[10]+= 5;

    circle( 250, yPos[11], 20);
    yPos[11]+= 5;
}
