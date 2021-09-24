let xPos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let yPos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function setup(){
    createCanvas(500, 500);
}

function draw(){
    background (0);

    xPos.push(mouseX);
    xPos.shift();
    yPos.push(mouseY);
    yPos.shift();

    for( var i = 0; i < xPos.length; i++){
        circle(xPos[i], yPos[i], 20)
        

    }
}